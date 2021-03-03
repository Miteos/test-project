import React from 'react'
import {inject, observer} from "mobx-react";
import AddLibraryForm from "./AddLibraryForm";
import NewLibraryForm from "./forms/NewLibraryForm";
import {CardBox} from "./ui/CardBox";
import {AnimateAppearComponent} from "./animations/AnimateAppearComponent";
import {SlideInFromLeft} from "./animations/SlideInFromLeft";

@inject('rootStore')
@observer
class NewLibraryView extends React.Component {
    store = this.props.rootStore.newLibraryStore;
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
            <div className="full-width" >
                <SlideInFromLeft>
                <CardBox title={"Add new Library"}>
                    <div className="textarea"><AddLibraryForm grid form = {form}/></div>
                </CardBox>
                </SlideInFromLeft>
            </div >
        );
    }
}
export default NewLibraryView
