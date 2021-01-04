import React from  'react'
import {Link} from "react-router-dom";

const ListItem = ({author,title,description,id,handleDelete})=> {
    return(
            <div className="list-item">
                <div>
                    <Link to={`/book-details/${id}`}>Title: {title}</Link>
                    <p>Author: {author}</p>
                    {description ===undefined ? <p>Description: No description for this book yet !</p> : <p>Description : {description.substr(0,500)+' ...'}</p>}
                    <button onClick={handleDelete} className="green-button">Remove</button>
                </div>
            </div>
    )
}
export default ListItem
