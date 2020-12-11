import React from 'react'
import {inject, observer} from "mobx-react";
import SelectInput from "./inputs/SelectInput";
import {Link} from "react-router-dom";

@inject('rootStore')
@observer
class NewBookView extends React.Component {
    store = this.props.rootStore.newBookStore;
    id = this.props.id;

    componentDidMount() {
        if (this.id !==undefined){
            this.store.getBook(this.id)
        }
    }

    render() {
        return (
            <div className="form-width" >
                <span>Enter authors name</span>
                 <input placeholder="Author Name*" type="text" value={this.store.model.author} onChange={this.store.handleInputChange1}/>
                <span>Enter the name of the book</span>
                 <input placeholder="Book Name*" type="text" value={this.store.model.title} onChange={this.store.handleInputChange2}/>
                 <SelectInput
                     label={'Choose reading status'}
                     items ={this.store.selectStatusArray}
                     value={this.store.model.status}
                     handler={this.store.handleInputChange3}
                     hasDisabled
                     disabled = {'Choose ...'}
                 />
                 <div className="row-buttons">
                     {this.id === undefined ?
                         <button disabled={this.store.model.author === '' || this.store.model.title === ''||this.store.model.status === ''} onClick={this.store.handleBookSubmit} >Submit</button>
                         :  <button disabled={this.store.model.author === '' || this.store.model.title === ''||this.store.model.status === ''} onClick={this.store.editBook} >Edit
                         </button>}
                     <Link to={'/'}><button onClick={this.store.resetData}>Return</button></Link>
                 </div>
             </div >
        );
    }
}
export default NewBookView
