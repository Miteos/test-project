import React from 'react'
import {useTableStore} from "../stores/TableContext";

const NewBook = () => {
    const books = useTableStore();
    const [tableID] =  React.useState(books.data.length + 1);
    const [authorInput, setAuthorInput] = React.useState("");
    const [bookInput, setBookInput] = React.useState("");
    const [statusInput, setStatusInput] = React.useState("");
    return(
        <div className="inputs">
            <h1>Add Book Form</h1>
            <input placeholder="Author Name*" type="text" value={authorInput} onChange={(e) =>setAuthorInput(e.target.value)}/>
            <input placeholder="Book Name*" type="text" value={bookInput} onChange={(e) =>setBookInput(e.target.value)}/>
            <select value={statusInput} onChange={(e) =>setStatusInput(e.target.value)}>
                <option hidden>Choose reading status</option>
                <option value={"completed"}>Completed</option>
                <option value={"to-read"}>To-Read</option>
            </select>
            <button onClick={() => books.addBook(tableID,authorInput,bookInput,statusInput)}>Submit</button>
        </div>
    )
};
export default NewBook
