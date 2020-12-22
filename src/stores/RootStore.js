import {TableViewStore} from "./TableViewStore";
import {NewBookViewStore} from "./NewBookViewStore";
import {BookDetailsViewStore} from "./BookDetailsViewStore";


export class RootStore{
    constructor() {
        this.tableStore = new TableViewStore(this);
        this.newBookStore = new NewBookViewStore(this);
        this.bookDetailsStore = new BookDetailsViewStore(this)
    }
}


const rootStore = new RootStore();
export default rootStore;
