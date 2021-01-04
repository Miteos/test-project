import {action, observable} from "mobx";


export class BookDetailsViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @observable descOpen = false;
    @observable detOpen = false;
    @observable revOpen = false;
    @action openDescriptionForm = () =>{
        this.descOpen = !this.descOpen;
    }
    @action openDetailsForm = () =>{
        this.detOpen = !this.detOpen;
    }
    @action openReviewForm = () =>{
        this.revOpen = !this.revOpen;
    }
}
