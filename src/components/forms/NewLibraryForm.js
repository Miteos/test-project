import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import {NewLibraryViewStore} from "../../stores/NewLibraryViewStore";

const store = new NewLibraryViewStore()

export default class NewLibraryForm extends Form {

    plugins() {
        return {
            dvr: dvr(validatorjs)
        };
    }

    setup() {
        return {
            fields: [
                {
                    name: "library",
                    label: "Name of Library",
                    placeholder: "Enter name of the library*",
                    rules: "required|string",
                },
                {
                    name: "genre",
                    label: "Libraries' book genre",
                    placeholder: "Enter libraries' genre *",
                    rules: "required|string"
                },
                {
                    name: "description",
                    label: "Description of the library",
                    rules: "string",
                } ,
                {
                    name: 'file',
                    type: 'file',
                    hooks: {
                        onDrop: field => console.log(field.files[0].name),


                    }
                }
            ]
        };
    }

    hooks() {
        return {
            async  onSuccess(form) {
                if(form.values().id === ""){
                    await  store.librarySubmit(form);
                }
                else await store.editLibrary(form);
            },
            onError(form) {
                alert("Form has errors!");
                console.log("All form errors", form.errors());
            },
            onClear(form){
            }
        };
    }
}
