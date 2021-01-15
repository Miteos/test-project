import React from 'react'
import { compose } from 'recompose'
import {inject, observer} from "mobx-react";
import AddBookForm from "./AddBookForm";
import {NewBookViewStore} from "../stores/NewBookViewStore";
import withStore from "./hocs/WithStore";

class NewBookView extends React.Component {
    id = this.props.id;

      async  componentDidMount() {
            if (this.id !==undefined){
               await this.props.dataStore.getBook(this.id)
            }else await  this.props.dataStore.resetData()
        }

    render() {
        return (
            <div className="form-width" >
                <AddBookForm form ={this.props.dataStore.form} id ={this.id} goBack ={true}/>
             </div >
        );
    }
}
export default compose(
    withStore({
        dataStore: new NewBookViewStore(),
    },{
    onInit:(stores)=>{
        stores.dataStore.createForm()
    }}),
    inject('dataStore'),
    observer,)(NewBookView)
