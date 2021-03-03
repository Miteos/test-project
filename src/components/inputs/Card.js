import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AddBookDescriptionForm from "../AddBookDescriptionForm";
import AddBookForm from "../AddBookForm";
import AddBookReviewForm from "../AddBookReviewForm";
import {Observer} from "mobx-react";
import AddLibraryForm from "../AddLibraryForm";
import {SlideInFromLeft} from "../animations/SlideInFromLeft";
import {AnimateAppearComponent} from "../animations/AnimateAppearComponent";

const editIcon = <FontAwesomeIcon icon={faEdit} size={"sm"} />;

const Card= ({title, position,details,description,review, opener,openState,revForm,detForm,descForm,store,library,detLibraryForm}) => {
    return(
        <Observer>{() =>
            <div className={"item-" + position}>
                <div className="card">
                    <div className="card-header">
                        <h2>{title}</h2>
                        <button onClick={opener} className="icon-button">{editIcon}</button>
                    </div>
                    <div className="card-content">
                        <div className="card-inner">
                            {description === true && !openState ?
                                <p>
                                    {store.model.description === undefined ? 'Ooof! Seems like you didnt add a description for this book, click edit button to add one!' : store.model.description}
                                </p>
                                : null}
                            {description === true && openState ?
                                <div className="textarea"><AnimateAppearComponent><AddBookDescriptionForm form={descForm}/></AnimateAppearComponent></div> : null}
                            {review === true && !openState ?
                                <p>
                                    {store.model.review === undefined ? 'Ooof! Seems like you didnt review this book, click edit button to add a review!' : store.model.review}
                                </p>
                                : null}
                            {review === true && openState ?
                                <div className="textarea"><AnimateAppearComponent><AddBookReviewForm form={revForm}/></AnimateAppearComponent></div> : null}
                            {details === true && !openState ?
                                <div className="card-details">
                                    <p>Author: {store.model.author}</p>
                                    <p>Title : {store.model.title}</p>
                                    <p>Status : {store.model.status}</p>
                                    <p>Cover Type : {store.model.cover}</p>
                                    <p>Pages : {store.model.pages}</p>
                                    <p>Url : <a href={store.model.url} target="_blank" rel="noreferrer">
                                        {store.model.url.substr(0, 30)}</a>
                                    </p>
                                </div>
                                : null}
                            {details === true && openState ?
                                <div className="textarea"><AnimateAppearComponent><AddBookForm form={detForm}/></AnimateAppearComponent></div> : null}
                            {library === true && !openState ?
                                <div className="card-details">
                                    <p>Library: {store.model.library}</p>
                                    <p>Genre : {store.model.genre}</p>
                                    <p>Description : {store.model.description}</p>
                                </div>
                                : null}
                            {library === true && openState ?
                                <div className="textarea"><AnimateAppearComponent><AddLibraryForm form={detLibraryForm}/></AnimateAppearComponent></div> : null}
                        </div>
                    </div>
                </div>
            </div>
        }</Observer>
    )
};
export default Card
