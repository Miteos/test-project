import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const MainTitle = ({title, withLink}) =>{
    const home = <FontAwesomeIcon icon={faHome} size={"sm"} />;
    return(
        <div className="flex-row">
            <h1 className='styled-title'>{title}</h1>
        </div>
        )
}

