import React from "react";
import NewBookView from "../components/NewBookView";
import {MainTitle} from "../components/MainTitle";


function  AddBook(){
    return (
            <div className="container-centered">
                <div className="form-container">
                    <MainTitle title={'Add a book'}/>
                    <NewBookView/>
                </div>
             </div>
    );
}

export default AddBook;
