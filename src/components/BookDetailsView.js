import React from 'react'
import Card from "./inputs/Card";
import {inject, observer} from "mobx-react";
import BookDescriptionForm from "./forms/BookDescriptionForm";
import NewBookForm from "./forms/NewBookForm";
import BookReviewForm from "./forms/BookReviewForm";
import {MainTitle} from "./MainTitle";

@inject('rootStore')
@observer
class BookDetailsView extends React.Component {
    ui = this.props.rootStore.bookDetailsStore;
    store = this.props.rootStore.newBookStore;
    id = this.props.id;
    async  componentDidMount() {
        if (this.id !==undefined){
            await this.store.getBook(this.id)
            console.log(this.id)
        }
    }
    componentDidUpdate(){
        this.store.getBook(this.id)
    }
    render() {
        const revForm = new BookReviewForm(
            {
                values: {
                    review:this.store.model.review,
                    node : this.store.currentBook,
                    id : this.store.model.id
                }
            }
        )
        const descForm = new BookDescriptionForm( {
            values: {
                description:this.store.model.description,
                node : this.store.currentBook,
                id : this.store.model.id
            }
        });
        const detForm = new NewBookForm({
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
        return(
            <div>
                <MainTitle withLink={true} title={this.store.model.title}/>
                <div className="grid-oontainer">
                    <Card
                        title={"Book Details"}
                        position={1}
                        id = {this.id}
                        details
                        detForm = {detForm}
                        store = {this.store}
                        openState = {this.ui.detOpen}
                        opener={this.ui.openDetailsForm}
                    />
                    <Card
                        title={"Book Description"}
                        position={2}
                        id = {this.id}
                        description
                        descForm = {descForm}
                        store = {this.store}
                        openState = {this.ui.descOpen}
                        opener={this.ui.openDescriptionForm}
                    />

                    <Card
                        title={"My Review"}
                        position={3}
                        review
                        id = {this.id}
                        revForm = {revForm}
                        store = {this.store}
                        openState = {this.ui.revOpen}
                        opener={this.ui.openReviewForm}
                    />

                </div>
            </div>
        )
    }

};

export default BookDetailsView
