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

    @computed get getPaginated() {
        for (let i = 1; i <= Math.ceil(this.props.totalItems / this.store.itemsPerPage); i++) {
            this.pageNumbers.push(i);
        }
        return console.log(this.pageNumbers)
    }

    @computed getData(){
        return this.rootStore.data.length
    }

    @action paginate(number){
        this.current = number;
        this.active = number;
        console.log(number)
    };
    @computed get paginated(){
        const indexLastBook = this.current* this.itemsPerPage;
        const indexFirstBook = indexLastBook - this.itemsPerPage;
        return  this.rootStore.tableStore.data.slice( indexFirstBook,indexLastBook);
    };
}


