import {makeAutoObservable} from "mobx";

export class SelectInputViewStore {
    constructor() {
        makeAutoObservable(this)
    }
    options=['All','Human','Dwarf','Elf'];
    input = ''

     onChange = (e) => {
        this.input = e.target.value;
        console.log(this.input)
    };
}
