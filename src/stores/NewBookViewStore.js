import {action, computed, makeAutoObservable} from "mobx";

export class NewBookViewStore {
    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore
    }

    id = '';
    author = '';
    title = '';
    status = '';

    @action addBook(id, author, title, status) {
        this.rootStore.tableStore.data.push({
            id,
            author,
            title,
            status
        });
        this.id = '';
        this.author = '';
        this.title = '';
        this.status = '';
    }

    @computed get getID() {
        return this.rootStore.tableStore.data.length + 1
    }

    @action handleInputChange1 = (e) => {
        this.author= e.target.value
    };
    @action handleInputChange2 = (e) => {
        this.title = e.target.value
    };
    @action handleInputChange3 = (e) => {
        this.status = e.target.value
    };
}


