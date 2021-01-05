import {TableViewStore} from "./TableViewStore";
import {NewBookViewStore} from "./NewBookViewStore";
import {BookDetailsUiStore} from "./BookDetailsUiStore";
import {NewLibraryViewStore} from "./NewLibraryViewStore";
import {LibraryViewStore} from "./LibraryViewStore";
import {LibraryDetailsViewStore} from "./LibraryDetailsViewStore";


export class RootStore{
    constructor() {
        this.tableStore = new TableViewStore(this);
        this.newBookStore = new NewBookViewStore(this);
        this.bookDetailsStore = new BookDetailsUiStore(this);
        this.libraryStore = new LibraryViewStore(this);
        this.newLibraryStore = new NewLibraryViewStore(this);
        this.libraryDetailsStore = new LibraryDetailsViewStore(this)
    }
}


const rootStore = new RootStore();
export default rootStore;
