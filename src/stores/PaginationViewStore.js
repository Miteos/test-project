import {action, autorun, computed, makeAutoObservable} from "mobx";

export class PaginationViewStore {

   constructor(rootStore) {
       makeAutoObservable(this);
       this.rootStore = rootStore
   }
    current = 1;
    itemsPerPage = 5;
    active = 1;
    pageNumbers = [];

    @computed get getData(){
        return console.log(this.rootStore.tableStore.data.length)
    }
    // @autorun(() =>{
    //     for (let i = 1; i <= Math.ceil(this.rootStore.tableStore.data.length / this.itemsPerPage); i++) {
    //         this.pageNumbers.push(i);
    //     }
    // })

    @action paginate(number){
        this.current = number;
        this.active = number;
        console.log(number)
    };
    @computed get paginated(){
        const indexLastBook = this.current*this.itemsPerPage;
        const indexFirstBook = indexLastBook - this.itemsPerPage;
        return  this.rootStore.tableStore.data.slice( indexFirstBook,indexLastBook);
    };
}


