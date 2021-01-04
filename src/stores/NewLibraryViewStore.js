import {action, observable} from "mobx";
import uuid from "react-uuid";
import {LibraryService} from "../components/services/LibraryService";

export class NewLibraryViewStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = new LibraryService();
    }

    @observable model={
        library: '',
        genre: '',
        description:'',
        books:[],
        id:'',
        node:''
    }
    @observable isLoading = true;

    @action librarySubmit = async (form) => {
        try {
                this.isLoading = true;
                this.model = form.values()
                this.model.id = uuid();
                this.model.books =[];
                await this.api.post(this.model);
                this.status = "success";
                this.isLoading = false;
                alert('Successfully added a library!')
        } catch (error) {
                this.status = "error";
        }
    };
    @action editLibrary= async (form) => {
        const node = form.values().node;
        try {
            this.model = form.values();
            const response = await this.api.patch(this.model, node);
            if (response.status === 200) {
                this.status = "success";
                this.isLoading = false;
                alert('Success')
            }
        } catch (error) {
            this.status = "error";
        }

    }
}
