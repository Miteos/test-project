import {TableViewStore} from "./TableViewStore";
import {PaginationViewStore} from "./PaginationViewStore";
import {NewBookViewStore} from "./NewBookViewStore";

export class RootStore{
    constructor() {
        this.tableStore = new TableViewStore(this);
        this.paginationStore = new PaginationViewStore(this);
        this.newBookStore = new NewBookViewStore(this)
    }
}


const rootStore = new RootStore();
export default rootStore;
