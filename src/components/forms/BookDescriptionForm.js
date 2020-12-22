import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import {NewBookViewStore} from "../../stores/NewBookViewStore";

const store = new NewBookViewStore()

export default class BookDescriptionForm extends Form {

    plugins() {
        return {
            dvr: dvr(validatorjs)
        };
    }

    setup() {
        return {
            fields: [
                {
                    name: "description",
                    placeholder: "Enter the books description...",
                    rules: "string",
                },
            ]
        };
    }

    hooks() {
        return {
             async onSuccess(form) {
                 try {
                     await store.editBook(form)
                 }catch (e) {

                 }finally {
                     store.getBook(form)
                 }
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
