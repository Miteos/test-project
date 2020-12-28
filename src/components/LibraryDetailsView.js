import React from 'react'
import Card from "./inputs/Card";
import {inject, observer} from "mobx-react";
import BookDescriptionForm from "./forms/BookDescriptionForm";
import NewBookForm from "./forms/NewBookForm";
import BookReviewForm from "./forms/BookReviewForm";
import {MainTitle} from "./MainTitle";
import AddLibraryForm from "./AddLibraryForm";
import NewLibraryForm from "./forms/NewLibraryForm";
import ListItem from "./ui/ListItem";
import Table from "./Table";

@inject('rootStore')
@observer
class LibraryDetailsView extends React.Component {
    store = this.props.rootStore.libraryStore;
    ui = this.props.rootStore.libraryDetailsStore;
    id = this.props.id;
     componentDidMount() {
        if (this.id !==undefined){
            this.store.getLibrary(this.id) &&this.store.getBooks();

            // this.store.getBooks()
            console.log(this.id)
        }
    }
    componentDidUpdate(){
        this.store.getLibrary(this.id)
             // this.store.getBooks()
    }
    render() {
        const detailsLibraryForm = new NewLibraryForm( {
            values: {
                library: this.store.model.library,
                description:this.store.model.description,
                genre: this.store.model.genre,
                node : this.store.currentLibrary,
                id : this.store.model.id
            }
        });
        return(
            <div>
                <MainTitle withLink={true} title={this.store.model.library}/>
                <div className="grid-oontainer">
                    <Card
                        title={"Library Details"}
                        library
                        opener={this.ui.openLibraryDescriptionForm}
                        position={1}
                        detLibraryForm={detailsLibraryForm}
                        store={this.store}
                        openState = {this.ui.detLibraryOpen}
                    />
                    <div className="item-2">
                            {this.store.bookData.map((b,i)=>(
                                <div key={i}>
                                    <ListItem author={b.author} title={b.title} handler={()=>this.store.addBookToLibrary(b)}/>
                                </div>
                                ))}
                    </div>
                </div>
            </div>
        )
    }

};

export default LibraryDetailsView
