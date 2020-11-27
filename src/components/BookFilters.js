import React from 'react'
import {action, observable} from "mobx";
import {observer} from "mobx-react";

//  const BookFilters= ({value,defaultValue ,optionsArray, handleChange, submitChange, selectState}) => {
//
//     return(
//         <div>
//             <select value={value}  {...value.bind()}>
//                 {optionsArray.map(options =>(
//                     <option key={options} defaultValue={options[0]} value={options}>{options}</option>
//                 ))}
//             </select>
//             <button onClick={submitChange(value)}>Filter</button>
//         </div>
//     )
// };
@observer
class BookFilters extends React.Component{
    @observable input = "";
    @action onChange = (e) =>{
        this.input = e.target.value;
        console.log(this.input)
    };
    render() {
        const t = this.props.value;
        return (
            <div>
            <select value={this.input} onChange={this.onChange}>
                {this.props.optionsArray.map(options =>(
                    <option key={options} value={options}>{options}</option>
                ))}
            </select>
            <button>Filter</button>
        </div>
        );
    }
}

export default BookFilters
