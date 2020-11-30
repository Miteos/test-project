import React from 'react'
import {inject, observer} from "mobx-react";
import {computed} from "mobx";


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
@inject('rootStore')
@observer
class NewBook extends React.Component {
    store = this.props.rootStore.newBookViewStore;
    root = this.props.rootStore;
    render() {
        return (
            <div className='inputs'>
                 <h1>Add Book Form</h1>
             <input placeholder="Author Name*" type="text" value={this.store.author} onChange={this.store.handleInputChange1}/>
             <input placeholder="Book Name*" type="text" value={this.store.title} onChange={this.store.handleInputChange2}/>
             <select value={this.store.status} onChange={this.store.handleInputChange3}>
                 <option hidden>Choose reading status*</option>
                 <option value={"completed"}>Completed</option>
                 <option value={"to-read"}>To-Read</option>
                </select>
               <button disabled={this.store.author === '' || this.store.title === ''||this.store.status === ''}
                       onClick={() =>this.store.addBook( this.store.getID,this.store.author,this.store.title,this.store.status)} >
                   Submit
               </button>
             </div>
        );
    }
}
export default NewBook
