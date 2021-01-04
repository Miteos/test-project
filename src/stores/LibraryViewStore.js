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
    @observable libraryBooks =[]
    @observable filteredBookData = []

    @action  getBooks = async () => {
        this.loading = true;
        let url = 'libraries/' + this.currentLibrary +'/books';
        try {
            const data = await this.bookApi.get(url);
            this.bookData = Object.keys(data).map(i => data[i]);
            const setForRemovingDuplicates = new Set()
            this.filteredBookData = this.bookData.filter(el =>{
                const duplicate = setForRemovingDuplicates.has(el.id)
                setForRemovingDuplicates.add(el.id)
                return !duplicate
            });
        } catch (error) {
                this.error = "error";
        }finally {
                this.loading = false
        }
    };
    @action  getData = async () => {
        this.loading = true;
        try {
            const data = await this.api.get();
            this.apiData = Object.keys(data).map(i => data[i]);
        } catch (error) {
                this.error = "error";
        }finally {
                this.loading = false
        }
    };

    @action getLibrary = async (id) => {
        this.loading = true;
        try {
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const uid = Object.keys(getNode);
            const toArray = Object.values(getNode);
            this.model.library = toArray[0].library;
            this.model.genre = toArray[0].genre;
            this.model.description = toArray[0].description;
            this.model.id = toArray[0].id;
            this.currentLibrary = uid[0];
            this.status = "success";
            this.loading = false;
        if (toArray[0].books){
            this.libraryBooks = Object.keys(toArray[0].books).map(i => toArray[0].books[i])
        }else this.libraryBooks = []
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            })
        }
    };

    @action librarySubmit = async (form) => {
        this.loading = true;
        try {
            this.model = form.values();
            this.model.id = uuid();
            await this.api.post(this.book);
            this.status = "success";
            this.loading = false;
            alert('Successfully added a library!')
        } catch (error) {
                this.status = "error";
        }
    };
    @action addBookToLibrary = async (value,id) => {
        this.loading = true;
        try {
            const response = await this.api.postBook(value,this.currentLibrary);
            if (response.status === 200) {
                    this.status = "success";
                    this.loading = false;
            }
        } catch (error) {
                this.status = "error";
        }finally {
            alert('Successfully added a book to this library!')
            this.getBooks()
        }
    };
    @action deleteBookFromLibrary = async (id) => {
        this.loading = true;
        try {
            const getNode = await this.api.findBook(this.currentLibrary,`?&orderBy="id"&equalTo="${id}"`);
            const forUrl = Object.keys(getNode)[0];
            const response = await this.api.delete(this.currentLibrary,forUrl);
            if (response.status === 204) {
                this.loading = false
                alert("Success! This book has been deleted from library!")
            }
        } catch (error) {
            this.error = "error";
        } finally {
            this.getBooks()
        }
    };
}
