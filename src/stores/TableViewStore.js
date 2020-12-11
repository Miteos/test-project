import {action, makeObservable, observable, runInAction} from "mobx";
import {Api} from "./Api";


export class TableViewStore {
    @observable books =[];
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = new Api();
        makeObservable(this, {
            apiData :observable,
            search:observable,
            page : observable,
            limit:observable,
            sort:observable,
            lastPage :observable,
            status: observable,
            loading:observable,
            filter:action,
            getData:action,
            doSort:action,
            resetFilters:action,
            handleSort:action,
            // handleSearch:action,
            handleFilterStatus:action,
            handlePagination:action

        });
    }
    statusArray =['All','Completed', 'To-Read'];
    sortArray = ['Unsorted','Ascending','Descending'];
    apiData = [];
    status = '';
    search = '';
    sort = '';
    sorted = '';
    lastPage = '';
    error = '';
    page = 1;
    limit = 30;
    loading = true;

    getData = async () => {
        this.loading = true;
           try {
               const data = await this.api.get();
               if(data ===null)
                   runInAction(() => {
                   // this.lastPage = data.pages;
                   this.apiData = [];
                   this.loading = false

               });
               const toArray = Object.keys(data).map(i => data[i]);
               runInAction(() => {
                    // this.lastPage = data.pages;
                    this.apiData = toArray;
                    this.loading = false
                   });
            } catch (error) {
                runInAction(() => {
                    this.error = "error";
                })
            }finally {

           }
        };

    deleteBook = async (id) => {
        try {
            this.loading = true;
            const getNode = await this.api.getFilter(`?&orderBy="id"&equalTo="${id}"`);
            const forUrl  =Object.keys(getNode)[0];
            const response = await this.api.delete(forUrl);
            if (response.status === 204) {
                runInAction(() => {
                    this.loading = false
                })
            }
        } catch (error) {
            runInAction(() => {
                this.error="error";
            })
        }finally {
            this.getData()
        }
    };


    // handleSearch =(value)=>{
    //    this.search = value;
    //       this.apiData = this.apiData.filter(el => el.author === this.search);
    //     if (this.search === '')
    //         this.resetFilters()
    // };
   async filter (){
       try{
           await this.getData()
           runInAction(() => {
               this.sorted ='Unsorted'
           })
       }catch (e) {
           this.error = 'error'
       } finally{
           if(this.status === 'All'){
               this.getData()
           }
           runInAction(() => {
               this.apiData = this.apiData.filter(el => el.status === this.status)
           })

       }

    }
    handleFilterStatus = (e) => {
        this.status = e.target.value;
        this.filter()
    };
   async doSort (){
       this.loading =true;
       try{
          await this.getData()
       }catch (e) {
           this.error= 'error'
       }finally {
           if (this.sorted === 'Unsorted'){
              this.resetFilters();
               runInAction(() => {
                   this.loading =false
               })
           }
           if (this.sorted === 'Ascending'){
               runInAction(() => {
                   this.apiData = this.apiData.sort((a, b) => b.author.localeCompare(a.author))
                   this.status = 'All'
                   this.loading =false
               })
           }
           if (this.sorted === 'Descending'){
               runInAction(() => {
                   this.apiData = this.apiData.sort((a, b) => a.author.localeCompare(b.author))
                   this.status = 'All';
                   this.loading =false
               })
           }
       }
   }
    handleSort= (e) =>{
        this.sorted = e.target.value;
        this.doSort();

    };
    handlePagination = value =>{
        this.page = value;
        this.getData()
    };
    resetFilters = () =>{
        this.getData();
        // this.search = '';
        this.status = 'All';
        this.sorted = 'Unsorted'
    };
}


