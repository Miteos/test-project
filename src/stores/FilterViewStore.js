import {action, observable} from "mobx";

export class FilterViewStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable input = '';
    @observable optionsArray = ['all','completed','to-read'];

    @action onChange = (e) => {
            this.input = e.target.value;
        console.log(this.input)
    };
}
