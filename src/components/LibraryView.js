import React from 'react'
import {Observer} from "mobx-react";
import {Link} from "react-router-dom";
import LibraryList from "./LibraryList";



const LibraryView =({data})=>{
    const store = data;

        return(
            <Observer>{() =>
                <div className="centered">
                    <button className="green-button"><Link to='/add-library'>Add a Library</Link></button>
                    <LibraryList store={store}/>
                </div>
            }</Observer>
        );
}


export default LibraryView
