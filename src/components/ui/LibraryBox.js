import React, {useEffect} from 'react'
import {Observer} from "mobx-react";
import {MainTitle} from "../MainTitle";
import {Link} from "react-router-dom";


const LibraryBox = ({title,id}) => {
    return(
        <Observer>{()=>
            <div>
                <Link to={`/library-details/${id}`}>
                    <div className="box">
                        <MainTitle title={title}/>
                    </div>
                </Link>
            </div>
        }
        </Observer>
    )
};
export default LibraryBox
