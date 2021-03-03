import React from "react";
import {MainTitle} from "../components/MainTitle";
import NewLibraryView from "../components/NewLibraryView";

function  AddLibrary(){
    return (
        <div className="full-width">
            <MainTitle title={'Add library'}/>
            <NewLibraryView/>
        </div>
    );
}

export default AddLibrary;
