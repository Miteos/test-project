import React from "react";
import {MainTitle} from "../components/MainTitle";
import LibraryView from "../components/LibraryView";
import {LibraryViewStore} from "../stores/LibraryViewStore";


const store = new LibraryViewStore();
function  Libraries(){
    return (
        <div>
                <MainTitle title={'Your libraries'} withLink/>
                <LibraryView data = {store}/>
        </div>
    );
}

export default Libraries;
