import React,{useEffect} from  'react'
import ListItem from "./ListItem";
import {Observer} from "mobx-react";

const LibraryBookList = ({data,store})=> {
    useEffect(() => {
        store.getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <Observer>{() =>
            <div className="item-2">
                {data.map((b, i) => (
                    <div key={i}>
                        <ListItem author={b.author} title={b.title} description={b.description} id={b.id} handleDelete={()=>store.deleteBookFromLibrary(b.id)} />
                    </div>
                ))}
            </div>
        }</Observer>
    )
}
export default LibraryBookList
