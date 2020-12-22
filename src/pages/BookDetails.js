import React from "react";
import {MainTitle} from "../components/MainTitle";
import {useParams} from 'react-router-dom'
import BookDetailsView from "../components/BookDetailsView";


function  BookDetails(){
    let { id } = useParams();
    return (
        <div>
            <BookDetailsView id = {id}/>
        </div>

    );
}

export default BookDetails;
