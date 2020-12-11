import React from "react";
import NewBookView from "../components/NewBookView";
import {MainTitle} from "../components/MainTitle";
import {useParams} from 'react-router-dom'


function  EditBook(){
    let { id } = useParams();
    return (
        <div className="container-centered">
            <div className="form-container">
                <MainTitle title={'Edit book'}/>
                <NewBookView id = {id}/>
            </div>
        </div>

    );
}

export default EditBook;
