import React from 'react'
import {inject, observer} from "mobx-react";
import AddLibraryForm from "./AddLibraryForm";
import NewLibraryForm from "./forms/NewLibraryForm";

@inject('rootStore')
@observer
class NewLibraryView extends React.Component {
    store = this.props.rootStore.newLibraryStore;
    // async  componentDidMount() {
    //     if (this.id !==undefined){
    //         await this.store.getBook(this.id)
    //     }else await  this.store.resetData()
    // }
    render() {
        const form = new NewLibraryForm({
            values: {
                library: this.store.model.library,
                genre:this.store.model.genre,
                description : this.store.model.description,
                books : this.store.model.books,
                id : this.id,
                node : this.store.currentBook,
            }});
        return (
            <div className="form-width" >
                <AddLibraryForm form = {form}/>
            </div >
        );
    }
}
export default NewLibraryView
