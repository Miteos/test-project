import {action, observable} from "mobx";


export class LibraryDetailsViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @observable detLibraryOpen = false;
    @action openLibraryDescriptionForm = () =>{
        this.detLibraryOpen = !this.detLibraryOpen;
    }
}
