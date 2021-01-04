import React ,{useEffect} from 'react'
import LibraryBox from "./ui/LibraryBox";
import {Observer} from "mobx-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
const trash = <FontAwesomeIcon icon={faTrash} size={"sm"} />;

const LibraryList = ({store}) => {

    useEffect(() => {
        store.getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Observer>{() =>
        <div>
            {store.apiData.length === 0 ?
                <p>Whoops! Seems like you dont have any libraries...</p>
                : store.apiData.map((a,i)=>(
                        <div key={i} className="library-list">
                            <LibraryBox  title={a.library} id={a.id}/>
                            <button className="icon-button" onClick={()=>store.deleteLibrary(a.id)}>{trash}</button>
                        </div>
                    )
                )}

        </div>
        }</Observer>
    )
}
export default LibraryList
