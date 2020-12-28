import React from  'react'
import CheckboxInput from "../inputs/CheckboxInput";

const ListItem = ({author,title,handler})=> {
    return(
        <div className="list-item">
            <div>
                <p>Author:  {author}</p>
                <p>Title:  {title}</p>
            </div>
            <div>
                <button className="green-button margin-0" onClick={handler}>Add</button>
            </div>
        </div>
    )
}
export default ListItem
