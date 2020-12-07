import {action, computed, makeAutoObservable} from "mobx";
import {TableViewStore} from "./TableViewStore";

export class PaginationViewStore {

   constructor() {
       makeAutoObservable(this);
       this.data = new TableViewStore()
   }
    current = 1
   //  get lastPage(){
   //     this.data.getData()
   //     return this.data.lastPage
   //  }
   // get pagination(){
   //     const LENGTH = 5;
   //     const page = this.data.page;
   //
   //     const firstPageInSight = page <= Math.floor(LENGTH / 2);
   //     const lastPageInSight = this.lastPage - page <= Math.floor(LENGTH / 2);
   //
   //     const firstNumber = lastPageInSight ? this.lastPage - LENGTH + 1 : page - 2;
   //     const lastNumber = firstPageInSight ? LENGTH : page + 2;
   //
   //     const first = Math.max(1, firstNumber);
   //     const last = Math.min(this.lastPage, lastNumber);
   //
   //     const pages = [];
   //     for (let i = first; i <= last; i++) {
   //         pages.push(i)
   //     }
   //     console.log(pages);
   //     return pages
   // }
    // @computed get getPaginated() {
    //     for (let i = 1; i <= Math.ceil(this.props.totalItems / this.store.itemsPerPage); i++) {
    //         this.pageNumbers.push(i);
    //     }
    //     return console.log(this.pageNumbers)
    // }

    // @computed getData(){
    //     return this.rootStore.data.length
    // }
    // @computed get paginated(){
    //     const indexLastBook = this.current*this.itemsPerPage;
    //     const indexFirstBook = indexLastBook - this.itemsPerPage;
    //     return  this.rootStore.tableStore.data.slice( indexFirstBook,indexLastBook);
    // };
    // @action paginate(pageNumber){
    //     this.current = pageNumber
    // };
}


