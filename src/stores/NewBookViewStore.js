import {action, makeAutoObservable, runInAction} from "mobx";
import {Api} from "./Api";
import uuid from 'react-uuid'


export class NewBookViewStore {
    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
        this.api = new Api();
    }

    model = {
        id: '',
        author: '',
        title: '',
        status: ''
    };
    currentBook = null;
    id = '';
    author = '';
    title = '';
    status = '';
    selectStatusArray = ['Completed', 'To-Read'];
    isLoading = true;

    @action handleBookSubmit = async () => {
        this.isLoading = true;
        try {
            this.model.id = uuid(8);
            await this.api.post(this.model);
                runInAction(() => {
                    this.status = "success";
                    this.isLoading = false;
                    alert('Success')

                })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
    @action getBook = async (id) => {
        try {
            this.isLoading = true;
            const getNode = await this.api.getFilter(`?&orderBy="id"&equalTo="${id}"`);
            const uid = Object.keys(getNode);
            const toArray = Object.values(getNode);
            runInAction(() => {
                    this.model.author = toArray[0].author;
                    this.model.status = toArray[0].status;
                    this.model.title = toArray[0].title;
                    this.model.id = toArray[0].id;
                    this.currentBook = uid[0];
                    this.status = "success";
                    this.isLoading = false;
                })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    };
    @action resetData = () =>{
        this.model.author = '';
        this.model.status = '';
        this.model.title = '';
        this.model.id = '';
    }
    @action editBook = async () => {
        try {
            this.isLoading = true;
            const response = await this.api.put(this.model,this.currentBook);
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
        }
    };
    @action handleInputChange1 = (e) => {
        this.model.author= e.target.value
    };
    @action handleInputChange2 = (e) => {
        this.model.title = e.target.value
    };
    @action handleInputChange3 = (e) => {
        this.model.status = e.target.value
    };
}


