import {action, observable, runInAction} from "mobx";
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
        this.isLoading = true;
        try {
            runInAction(() => {
                this.model = form.values()
            });
            await runInAction(() => {
                this.model.id = uuid()
            });
            await this.api.post(this.model);
            runInAction(() => {
                this.status = "success";
                this.isLoading = false;
                alert('Successfully added a library!')
            })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
    @action editLibrary= async (form) => {
        const node = form.values().node;
        const id = form.values().id;
        try {
            runInAction(() => {
                this.model = form.values();
            });
            const response = await this.api.patch(this.model,node);
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
                    this.isLoading = false;
                    alert('Success')
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }finally {
        }
    };
}
