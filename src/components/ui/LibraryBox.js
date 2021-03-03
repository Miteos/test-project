import React from 'react'
import {Observer} from "mobx-react";
import {MainTitle} from "../MainTitle";
import {Link} from "react-router-dom";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const trash = <FontAwesomeIcon icon={faTrash} size={"sm"} />;
const LibraryBox = ({title,id,store}) => {
    return(
        <Observer>{()=>
            <div>
                    <div className="delete-in-box">
                        <button className="icon-button" onClick={()=>store.deleteLibrary(id)}>{trash}</button>
                    </div>
                <Link to={`/library-details/${id}`}>
                    <div className="picture-box">
                        <div className="image-in-box">
                            <img src='/assets/images/default-image.jpg' alt="default"/>
                        </div>
                        <div className="title-in-box">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        }
        </Observer>
    )
};
export default LibraryBox
