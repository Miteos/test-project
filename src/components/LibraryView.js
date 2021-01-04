import React, {useEffect} from 'react'
import {Observer} from "mobx-react";
import {Link} from "react-router-dom";
import LibraryBox from "./ui/LibraryBox";



const LibraryView =({data})=>{
    const store = data;

    useEffect(() => {
    store.getData();
}, []);

        return(
            <Observer>{() =>
                <div className="container">
                    <button className="green-button"><Link to='/add-library'>Add a Library</Link></button>
                    <div>
                        {store.apiData.length === 0 ?
                            <p>Whoops! Seems like you dont have any libraries...</p>
                        : null}
                        {store.apiData.map((a,i)=>(
                            <div key={i}>
                                <LibraryBox  title={a.library} id={a.id}/>
                            </div>
                            )
                        )}
                    </div>
                    </div>
            }</Observer>
        );
}


export default LibraryView
