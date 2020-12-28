import React from "react";
import {MainTitle} from "../components/MainTitle";
import NewLibraryView from "../components/NewLibraryView";

function  AddLibrary(){
    return (
        <div className="container-centered">
            <div className="form-container">
            <MainTitle title={'Add library'}/>
            <NewLibraryView/>
        </div>
        </div>
    );
}

export default AddLibrary;
