import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import {NewBookViewStore} from "../../stores/NewBookViewStore";


export default class NewBookForm extends Form {

    constructor(props) {
        super(props);
        this.store = new NewBookViewStore()
    }
    plugins() {
        return {
            dvr: dvr(validatorjs)
        };
    }

    setup() {
        return {
            fields: [
                {
                    name: "author",
                    label: "Enter author's name",
                    placeholder: "Author Name*",
                    rules: "required|string",
                },
                {
                    name: "title",
                    label: "Enter the name of the book",
                    placeholder: "Book Name*",
                    rules: "required|string"
                },
                {
                    name: "status",
                    label: "Choose reading status",
                    rules: "required|string",
                    extra:['Completed', 'To-Read'],
                    options:{
                        hasHidden : true,
                        hiddenValue : "Choose ...",
                    },
                } ,
                {
                    name: "cover",
                    label: "Choose cover Type",
                    rules: "required|string",
                    extra:['Hardcover', 'Softcover','Hardcover with Dust Jacket '],
                    options:{
                        hasHidden : true,
                        hiddenValue : "Choose ...",
                    },
                },
                {
                    name: "pages",
                    label: "Enter the number of pages",
                    placeholder: "Page number*",
                    rules: "required|numeric"
                },
                {
                    name: "url",
                    label: "Book Url",
                    placeholder: "Enter Book Url*",
                    rules: "url"
                },
            ]
        };
    }

    hooks() {
        return {
          async  onSuccess(form) {
                if(form.values().id === ""){
                  await  this.store.handleBookSubmit(form);
                }
                else await this.store.editBook(form);
            },
            onError(form) {
                alert("Form has errors!");
                // get all form errors
                console.log("All form errors", form.errors());
            },
            onClear(form){
                this.store.resetData()
            }
        };
    }
}
