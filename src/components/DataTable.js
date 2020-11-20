import React from 'react'
import {useTableStore} from "../stores/TableContext";
import {Observer} from 'mobx-react'


const  DataTable = () => {
    const books = useTableStore();
    const [selectInput, setSelectInput] = React.useState("");

    return (
        <Observer>{() =>
            <div className="inputs">
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
            {books.data.map((b,i) => (
                <tr key={i}>
                    <td>{b.id}</td>
                    <td>{b.author}</td>
                    <td>{b.title}</td>
                    <td>{b.status}</td>
                    <td className="clickable" onClick={() => books.removeBook(b.title)}>x</td>
                </tr>
            ))}
            </tbody>
        </table>
                <select value={selectInput} onChange={(e) =>setSelectInput(e.target.value)}>
                    <option defaultValue value={0}>All</option>
                    <option value={1}>Completed</option>
                    <option value={2}>To-Read</option>
                </select>
                <button onClick={books.filterByStatus(selectInput)}>Filter</button>
            </div>}
        </Observer>
    )
};

export default DataTable
