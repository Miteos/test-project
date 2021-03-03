import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";
import {Observer} from "mobx-react";
import {SlideInFromLeft} from "./animations/SlideInFromLeft";
import {SlideInFromRight} from "./animations/SlideInFromRight";
import {AnimateAppearComponent} from "./animations/AnimateAppearComponent";

const edit = <FontAwesomeIcon icon={faEdit} size={"sm"} />;
const details = <FontAwesomeIcon icon={faEye} size={"sm"} />;
const trash = <FontAwesomeIcon icon={faTrash} size={"sm"} />;
const plus = <FontAwesomeIcon icon={faPlus} size={"sm"} />;

const Table = ({store, hasAddButton, libraryStore}) =>{
    return(
        <Observer>{() =>
            <div>
                {store.loading === false ?<SlideInFromRight>
                <table className="styled-table">
                    <thead>
                    <tr>
                        { hasAddButton ===true ? ['ID', 'Author', 'Title', 'Status', 'Cover', 'Pages', 'Url', 'Edit', 'Details', 'Delete','Add to library'].map((headers, i) => (
                            <th key={i}>{headers}</th>
                        )) : ['ID', 'Author', 'Title', 'Status', 'Cover', 'Pages', 'Url', 'Edit', 'Details', 'Delete'].map((headers, i) => (
                            <th key={i}>{headers}</th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {store.apiData.length === 0 ? <tr>
                        <td colSpan="10">Whoops! Seems like The Great Library is not so great...</td>
                    </tr> : null}
                    {store.filteredList.map((b, i) => (
                        <tr key={i}>
                            {b.length === 0 ? <tr>No entries found</tr> : null}
                            <td>{b.id.substr(0, 5) + '...'}</td>
                            <td>{b.author}</td>
                            <td>{b.title}</td>
                            <td>{b.status}</td>
                            <td>{b.cover}</td>
                            <td>{b.pages}</td>
                            {b.url === '' ? <td>No url found</td> : <td className="clickable"><a href={b.url} target="_blank" rel="noreferrer">{b.url.substr(0, 5) + '...'}</a></td>}
                            <td className="clickable"><Link to={`/edit-book/${b.id}`}>{edit}</Link></td>
                            <td className="clickable"><Link to={`/book-details/${b.id}`}>{details}</Link></td>
                            <td className="clickable" onClick={() => store.deleteBook(b.id)}>{trash}</td>
                            { hasAddButton === true ? <td className="clickable" onClick={()=>libraryStore.addBookToLibrary(b,libraryStore.model.id)}>{plus}</td> : null}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </SlideInFromRight> : null  }
                <AnimateAppearComponent>  <Pagination
                    itemsPerPage={store.itemsPerPage}
                    active={store.page}
                    totalItems={store.apiData.length}
                    handler={store.handlePagination}
                /></AnimateAppearComponent>

            </div>
        }</Observer>
        )
};

export default Table
