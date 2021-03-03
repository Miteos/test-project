import {action, observable} from "mobx";
import {BookService} from "../components/services/BookService";
import uuid from 'react-uuid'
import NewBookForm from "../components/forms/NewBookForm";




export class NewBookViewStore {
    constructor() {
        this.api = new BookService();
    }
  model = {
        id: "",
        author: '',
        title: '',
        image:File,
        status: '',
        cover:'',
        pages: '',
        review : '',
        description : '',
        url:''
    };
    @observable currentBook = null;
    @observable status = '';
    @observable loading = true;
    @observable imageFile = {}
    @observable description = '';
    @observable review = '';
    @observable form = {}

    @action handleBookSubmit = async (form,image) => {
        this.loading = true;
        try {
            this.imageFile = image
            console.log(this.imageFile)
            this.model = form.values()
            this.model.id = uuid()
            await this.api.post(this.model);
            this.status = "success";
            this.loading = false;
            alert('Successfully added a book!')
        } catch (error) {
            this.status = "error";

        }
    };
    @action getBook = async (id) => {
        this.loading = true;
        try {
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const uid = Object.keys(getNode);
            const toArray = Object.values(getNode);
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
            this.loading = false;
           console.log( this.form.values())
        } catch (error) {
            this.status = "error";
        }finally {
            this.form = new NewBookForm({
                values: {
                    author: this.model.author,
                    title:this.model.title,
                    status : this.model.status,
                    image: this.model.image,
                    id : this.model.id,
                    node : this.currentBook,
                    cover: this.model.cover,
                    pages: this.model.pages,
                    url: this.model.url,
                }});
        }
    };
    @action createForm(){
        this.form = new NewBookForm({
            values: {
                id: "",
                author: '',
                title: '',
                status: '',
                image:File,
                cover:'',
                pages: '',
                review : '',
                description : '',
                url:''
            }});
    }
    @action  resetData = () =>{
        try {
            this.loading = true;
            this.model.author = '';
            this.model.status = '';
            this.model.title = '';
            this.model.id = '';
            this.model.cover ='';
            this.model.file ='';
            this.model.pages = '';
            this.model.url = '';
            this.model.description = '';
            this.model.review = '';
        }catch (error) {
            this.status = "error";
        }
    }
    @action editBook = async (form) => {
        const node = form.values().node;
        try {
            this.model = form.values();
            const response = await this.api.patch(this.model,node);
            if (response.status === 200) {
                    this.status = "success";
                    this.loading = false;
                    alert('Success')
            }
        } catch (error) {
                this.status = "error";
        }
    };

}


