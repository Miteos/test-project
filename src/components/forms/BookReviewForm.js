import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import {NewBookViewStore} from "../../stores/NewBookViewStore";

const store = new NewBookViewStore();

export default class BookReviewForm extends Form {

    plugins() {
        return {
            dvr: dvr(validatorjs)
        };
    }

    setup() {
        return {
            fields: [
                {
                    name: "review",
                    placeholder: "Enter your review of the book...",
                    rules: "string",
                },
            ]
        };
    }

    hooks() {
        return {
            onSuccess(form) {
                store.editBook(form)
            },
            onError(form) {
                alert("Form has errors!");
                // get all form errors
                console.log("All form errors", form.errors());
            },
            onClear(form){
                store.resetData()
            }
        };
    }
}
