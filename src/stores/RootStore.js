import {TableViewStore} from "./TableViewStore";
import {PaginationViewStore} from "./PaginationViewStore";
import {NewBookViewStore} from "./NewBookViewStore";
import {FilterViewStore} from "./FilterViewStore";
import ProjectView from "../components/ProjectView";
import {ProjectViewStore} from "./ProjectViewStore";

export class RootStore {
    constructor() {
        this.tableStore = new TableViewStore(this);
        this.paginationViewStore = new PaginationViewStore(this);
        this.newBookViewStore = new NewBookViewStore(this);
        this.filterViewStore = new FilterViewStore(this);
        this.projectViewStore = new ProjectViewStore(this)
    }
}
