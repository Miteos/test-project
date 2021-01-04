import {action, observable} from "mobx";


export class LibraryDetailsViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable detLibraryOpen = false;
    @observable isOpen = false


    @action openLibraryDescriptionForm = async (id) =>{
        this.detLibraryOpen = !this.detLibraryOpen;
       if(this.detLibraryOpen === false){
           await  this.rootStore.libraryStore.getLibrary(id)
        }
    }
    @action openAddBooks = () =>{
        this.isOpen = !this.isOpen;
    }
}
