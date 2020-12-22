import {action, observable, runInAction} from "mobx";
import {BookService} from "../components/services/BookService";
import uuid from 'react-uuid'


export class NewBookViewStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = new BookService();
    }

    @observable model = {
        id: '',
        author: '',
        title: '',
        status: '',
        cover:'',
        pages: '',
        review : '',
        description : '',
        url:''
    };
    @observable currentBook = null;
    @observable status = '';
    @observable selectStatusArray = ['Completed', 'To-Read'];
    @observable isLoading = true;
    @observable description = '';
    @observable review = '';

    @action handleBookSubmit = async (form) => {
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
                    alert('Successfully added a book!')
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
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const uid = Object.keys(getNode);
            const toArray = Object.values(getNode);
            runInAction(() => {
                    this.model.author = toArray[0].author;
                    this.model.status = toArray[0].status;
                    this.model.title = toArray[0].title;
                    this.model.id = toArray[0].id;
                    this.model.cover = toArray[0].cover;
                    this.model.pages = toArray[0].pages;
                    this.model.description = toArray[0].description;
                    this.model.review = toArray[0].review;
                    this.model.url = toArray[0].url;
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
    @action  resetData = async () =>{
        try {
            this.isLoading = true;
            await runInAction(() => {
                    this.model.author = '';
                    this.model.status = '';
                    this.model.title = '';
                    this.model.id = '';
                    this.model.cover ='';
                    this.model.pages = '';
                    this.model.url = '';
                    this.model.description = '';
                    this.model.review = '';
                })
        }catch (e) {
        }
    }
    @action editBook = async (form) => {
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


