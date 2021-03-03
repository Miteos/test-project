import React from 'react'
import Card from "./inputs/Card";
import {inject, observer} from "mobx-react";
import {MainTitle} from "./MainTitle";
import NewLibraryForm from "./forms/NewLibraryForm";
import LibraryBookList from "./ui/LibraryBookList";
import TableView from "./TableView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";


const plus = <FontAwesomeIcon icon={faPlus} size={"sm"} />;
const close = <FontAwesomeIcon icon={faWindowClose} size={"sm"} />;
@inject('rootStore')
@observer
class LibraryDetailsView extends React.Component {
    store = this.props.rootStore.libraryStore;
    bookStore = this.props.rootStore.tableStore
    ui = this.props.rootStore.libraryDetailsStore;
    id = this.props.id;
   async componentDidMount() {
        if (this.id !==undefined){
            await this.store.getLibrary(this.id)
            await this.store.getBooks()
        }
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
            <div className="full-width">
                <MainTitle withLink={true} title={this.store.model.library}/>
                <div className="grid-oontainer">
                    <Card
                        title={"Library Details"}
                        library
                        opener={()=>this.ui.openLibraryDescriptionForm(this.id)}
                        position={1}
                        detLibraryForm={detailsLibraryForm}
                        store={this.store}
                        openState = {this.ui.detLibraryOpen}
                    />

                    <div className="item-2">
                        <div className="library-books-add">
                            <button className="icon-button" onClick={this.ui.openAddBooks}>{ this.ui.isOpen === false ? plus : close}</button>
                        </div>
                        <div>
                            { this.ui.isOpen === true ?<TableView data={this.bookStore} pageUrl={'books'} hasAddButton library={this.store}/> : null}
                        </div>
                                <div>
                                 <LibraryBookList data={this.store.filteredBookData} store={this.store}/>
                                 {this.store.filteredBookData.length===0 ? 'Currently no books in the library':null}
                                </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default LibraryDetailsView
