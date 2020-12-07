// import React,{useEffect} from 'react'
// import {Observer} from "mobx-react";
//
// const SelectInput = (value, items, handler, select) => {
//     const store = select;
//     const onChange = e => {
//         value = e.target.value;
//         handler(value)
//     }
//     useEffect(()=> console.log(select),[select]);
//     return(
//         <Observer>{() =>
//             <div className='inputs'>
//                 <select value={value} onChange={onChange}>
//                     {items.map(options =>(
//                     <option key={options.toString()} id={options} value={options}>{options}</option>
//                     ))}
//                 </select>
//             </div>
//         }</Observer>
//     )
// };
// export default SelectInput

import React from 'react'
import {observer} from "mobx-react";

@observer
class SelectInput extends React.Component{
    render() {
        return (
            <div className="flex-column">
                <span>{this.props.label}</span>
                <select value={this.props.value} onChange={this.props.handler}>
                    {this.props.items.map((options,i) =>(
                        <option key={i} id={options} value={options}>{options}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default SelectInput
