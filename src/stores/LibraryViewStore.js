import {action, observable, runInAction} from "mobx";
import {LibraryService} from "../components/services/LibraryService";
import uuid from "react-uuid";
import {BookService} from "../components/services/BookService";

export class LibraryViewStore {

    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = new LibraryService();
        this.bookApi = new BookService();
    }
    @observable  apiData = [];
    @observable book = {
        books:{}
    };
    @observable  bookData = [];
    @observable loading = true;
    @observable currentLibrary = '';
    @observable status = '';
    @observable model={
        library: '',
        genre: '',
        description:'',
        books:[],
        id:'',
        node:''
    };

    @action  getBooks = async () => {
        this.loading = true;
        try {
            const data = await this.bookApi.get();
            const toArray = Object.keys(data).map(i => data[i]);
                runInAction(() => {
                    this.bookData = toArray;
                });
        } catch (error) {
            runInAction(() => {
                this.error = "error";
            })
        }finally {
            runInAction(() => {
                this.loading = false
            });
        }
    };
    @action  getData = async () => {
        this.loading = true;
        try {
            const data = await this.api.get();
            const toArray = Object.keys(data).map(i => data[i]);
                runInAction(() => {
                    this.apiData = toArray;
                });
        } catch (error) {
            runInAction(() => {
                this.error = "error";
            })
        }finally {
            runInAction(() => {
                this.loading = false
            });
        }
    };

    @action getLibrary = async (id) => {
        try {
            this.loading = true;
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const uid = Object.keys(getNode);
            const toArray = Object.values(getNode);
            runInAction(() => {
                this.model.library = toArray[0].library;
                this.model.genre = toArray[0].genre;
                this.model.description = toArray[0].description;
                this.model.id = toArray[0].id;
                this.model.books = toArray[0].books;
                this.currentLibrary = uid[0];
                this.status = "success";
                this.isLoading = false;
            })
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    };

    @action librarySubmit = async (form) => {
        this.loading = true;
        try {
            runInAction(() => {
                this.model = form.values()
            });
            await runInAction(() => {
                this.model.id = uuid()
            });
            await this.api.post(this.book);
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
    @action addBookToLibrary = async (value) => {
        this.loading = true;
        try {
            this.book.books=value;
            console.log(value)
            const response = await this.api.postBook(value,this.currentLibrary);
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
                    this.loading = false;
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
