import React from 'react'
import {action, observable} from "mobx";


// class NewBook extends React.Component = () => {
//     const books = useTableStore();
//     const [tableID] =  React.useState(books.data.length + 1);
//     const [authorInput, setAuthorInput] = React.useState("");
//     const [bookInput, setBookInput] = React.useState("");
//     const [statusInput, setStatusInput] = React.useState("");
//     return(
//         <div className="inputs">
//             <h1>Add Book Form</h1>
//             <input placeholder="Author Name*" type="text" value={authorInput} onChange={(e) =>setAuthorInput(e.target.value)}/>
//             <input placeholder="Book Name*" type="text" value={bookInput} onChange={(e) =>setBookInput(e.target.value)}/>
//             <select value={statusInput} onChange={(e) =>setStatusInput(e.target.value)}>
//                 <option hidden>Choose reading status*</option>
//                 <option value={"completed"}>Completed</option>
//                 <option value={"to-read"}>To-Read</option>
//             </select>
//             <button onClick={() => books.addBook(tableID,authorInput,bookInput,statusInput)}>Submit</button>
//         </div>
//     )
// };
class NewBook extends React.Component{
    @action handleInputChange = (e) => {
        this[e.target.name] = e.target.value
    };
    @observable id ='';
    @observable author ='';
    @observable book ='';
    @observable status ='';
    render() {
        return (
            <div className="inputs">
                 <h1>Add Book Form</h1>
             <input placeholder="Author Name*" type="text" value={this.author} onChange={this.handleInputChange}/>
             <input placeholder="Book Name*" type="text" value={this.book} onChange={this.handleInputChange}/>
             <select value={this.status} onChange={this.handleInputChange}>
                 <option hidden>Choose reading status*</option>
                 <option value={"completed"}>Completed</option>
                 <option value={"to-read"}>To-Read</option>
                </select>
               {/*<button onClick={addBook( id,store.author,store.book,store.status)}>Submit</button>*/}
             </div>
        );
    }
}
export default NewBook
