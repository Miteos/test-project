import React from 'react'
import {useTableStore} from "../stores/TableContext";
import {Observer} from 'mobx-react'
import Pagination from "./Pagination";


const  DataTable = () => {
    const books = useTableStore();
    // const [selectInput, setSelectInput] = React.useState("");

    return (
        <Observer>{() =>
            <div className="inputs">
                <Pagination itemsPerPage={books.tableSize} totalItems={books.data.length} paginate={books.paginate} active={books.currentPage} />
            <table className="styled-table">
            <thead>
            <tr>
                <th className="clickable" onClick={() => books.sortById()}>ID</th>
                <th className="clickable" onClick={() => books.sortByAuthor()}>Author</th>
                <th>Title</th>
                <th>Status</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {books.paginatedBooks.map((b,i) => (
                <tr key={i}>
                    <td>{b.id}</td>
                    <td>{b.author}</td>
                    <td>{b.title}</td>
                    <td>{b.status}</td>
                    <td className="clickable" onClick={() => books.removeBook(b.id)}>x</td>
                </tr>
            ))}
            </tbody>
        </table>
                {/*<select value={selectInput} onChange={(e) =>setSelectInput(e.target.value)}>*/}
                {/*    <option defaultValue value={0}>All</option>*/}
                {/*    <option value={1}>Completed</option>*/}
                {/*    <option value={2}>To-Read</option>*/}
                {/*</select>*/}
                {/*<button onClick={books.filterByStatus(selectInput)}>Filter</button>*/}
            </div>}
        </Observer>
    )
};

export default DataTable
