import React from "react";
import {useParams} from 'react-router-dom'
import LibraryDetailsView from "../components/LibraryDetailsView";


function  LibraryDetails(){
    let { id } = useParams();
    return (
        <div>
            <LibraryDetailsView id = {id}/>
        </div>

    );
}

export default LibraryDetails;
