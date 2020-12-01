import {action} from "mobx";

export class ProjectViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action    handleChangePage = page => {
        this.rootStore.paginationViewStore.paginate(page);
    };

}
