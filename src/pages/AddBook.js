import React from "react";
import NewBookView from "../components/NewBookView";
import {MainTitle} from "../components/MainTitle";
import {useParams} from "react-router-dom";


function  AddBook(){
    let {id} = useParams()
    return (
            <div className="container-centered">
                <div className="form-container">
                    <MainTitle title={'Add a book'}/>
                    <NewBookView id = {id}/>
                </div>
             </div>
    );
}

export default AddBook;
