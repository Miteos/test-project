import React from 'react'
import {inject, observer} from "mobx-react";
import AddBookForm from "./AddBookForm";
import NewBookForm from "./forms/NewBookForm";

@inject('rootStore')
@observer
class NewBookView extends React.Component {
    store = this.props.rootStore.newBookStore;
    id = this.props.id;
      async  componentDidMount() {
            if (this.id !==undefined){
               await this.store.getBook(this.id)
            }else await  this.store.resetData()
        }

    render() {
        const form = new NewBookForm({
            values: {
                    author: this.store.model.author,
                    title:this.store.model.title,
                    status : this.store.model.status,
                    id : this.id,
                    node : this.store.currentBook,
                    cover: this.store.model.cover,
                    pages: this.store.model.pages,
                    url: this.store.model.url,
                }});
        return (
            <div className="form-width" >
                <AddBookForm form ={form} id ={this.id} goBack ={true}/>
             </div >
        );
    }
}
export default NewBookView
