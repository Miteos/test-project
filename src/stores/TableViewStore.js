import {action, makeObservable, observable, runInAction} from "mobx";
import {Api} from "./Api";

export class TableViewStore {

    constructor() {
        this.api = new Api();
        makeObservable(this, {
            apiData :observable,
            search:observable,
            page : observable,
            race :observable,
            gender:observable,
            limit:observable,
            sort:observable,
            lastPage :observable,
            status: observable,
            loading:observable,
            getData: action,
            handleSearch:action,
            handlePagination:action

        });
    }

    apiData = [];
    status = 'test';
    search = '';
    race = '';
    gender = '';
    sort = '';
    sorted = '';
    lastPage = '';
    page = 1;
    limit = 30;
    loading = 'true';


    getData = async () => {
        this.loading = true;
           try {
                let params = {
                    sort : this.sort,
                    page: this.page,
                    limit: this.limit,
                    race : this.race,
                    gender:this.gender,
                    name: this.search.charAt(0).toUpperCase() + this.search.slice(1)
                };
                const urlParams = new URLSearchParams(Object.entries(params));
                const data = await this.api.get(urlParams);
                runInAction(() => {
                    this.lastPage = data.pages;
                    this.apiData = data.docs;
                    this.loading = false
                   });
            } catch (error) {
                runInAction(() => {
                    this.status = "error";
                });
            }
        };



    handleSearch =(value)=>{
       this.search = value;
       this.getData()
    };
    handleFilterRace = (e) => {
        this.race = e.target.value;
        if(this.race === 'All'){
            this.race = ''
        }
        console.log(this.race);
        this.getData()
    };
    handleFilterGender = (e) => {
        this.gender = e.target.value;
        if(this.gender === 'All'){
            this.gender = ''
        }
        console.log(this.gender);
        this.getData()
    };
    handleSort= (e) =>{
        this.sorted = e.target.value;
        // this.sort = `name:${e.target.value}`.toLowerCase();
        if (e.target.value === 'Ascending'){
            this.sort = 'name:asc'
        }
        if (e.target.value === 'Descending'){
            this.sort = 'name:desc'
        }
        console.log(this.sort);
        this.getData()
    };
    handlePagination = value =>{
        this.page = value;
        this.getData()
    };
    resetFilters = () =>{
        this.search = '';
        this.race = '';
        this.gender = '';
        this.sort = '';
        this.sorted = '';
        this.page = 1;
        this.getData()
    };
}


