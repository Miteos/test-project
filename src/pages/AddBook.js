import React from "react";
import NewBookView from "../components/NewBookView";
import {MainTitle} from "../components/MainTitle";
import {useParams} from "react-router-dom";
import {CardBox} from "../components/ui/CardBox";


function  AddBook(){
    let {id} = useParams()
    return (
            <div className="full-width">
                    <MainTitle title={'Add a book'}/>
                    <CardBox title={'Add a book'} >
                        <NewBookView id = {id}/>
                    </CardBox>
             </div>
    );
}

export default AddBook;
