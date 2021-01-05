import {action, observable} from "mobx";
import {LibraryService} from "../components/services/LibraryService";
import {BookService} from "../components/services/BookService";

export class LibraryViewStore {

    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = new LibraryService();
        this.bookApi = new BookService();
    }
    @observable.shallow  apiData = [];
    bookData = [];
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
    @observable.shallow filteredBookData = []

    @action  getBooks = async () => {
        this.loading = true;
        let url = 'libraries/' + this.currentLibrary +'/books';
        try {
            const data = await this.bookApi.get(url);
            if (data !== null){
                this.bookData = Object.keys(data).map(i => data[i]);
                const setForRemovingDuplicates = new Set()
                this.filteredBookData = this.bookData.filter(el =>{
                    const duplicate = setForRemovingDuplicates.has(el.id)
                    setForRemovingDuplicates.add(el.id)
                    return !duplicate
                });
            }else {
                this.bookData = [];
                this.filteredBookData =  []
            }
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
            if (data !==null){
                this.apiData = Object.keys(data).map(i => data[i]);
            }
            else this.apiData = []
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
            this.model.books = toArray[0].books
            this.currentLibrary = uid[0];
            this.status = "success";
            this.loading = false;
        }
        catch (error) {
                this.status = "error";
        }
    };
    @action addBookToLibrary = async (value) => {
        this.loading = true;
        try {
            const response = await this.api.postBook(value,this.currentLibrary);
            if (response.status === 200) {
                    this.status = "success";
                    this.loading = false;
                    alert('Successfully added a book to this library!')
            }
        } catch (error) {
                this.status = "error";
        }finally {
          await  this.getBooks()
        }
    };
    @action deleteBookFromLibrary = async (id) => {
        this.loading = true;
        try {
            const getNode = await this.api.findBook(this.currentLibrary,`?&orderBy="id"&equalTo="${id}"`);
            const forUrl = Object.keys(getNode)[0];
            const response = await this.api.deleteBookInLibrary(this.currentLibrary,forUrl);
            if (response.status === 200) {
                this.loading = false
            }
        } catch (error) {
            this.error = "error";
        } finally {
            alert("Success! This book has been deleted from library!")
            await this.getBooks()
        }
    };
    @action deleteLibrary = async (id) => {
        this.loading = true;
        try {
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const forUrl = Object.keys(getNode)[0];
            const response = await this.api.deleteLibrary(forUrl);
            if (response.status === 200) {
                this.loading = false
            }
        } catch (error) {
            this.error = "error";
        } finally {
            await this.getData()
            alert("Success! This library has been deleted!")
        }
    };
}
