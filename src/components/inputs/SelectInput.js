import React from 'react'
import {observer} from "mobx-react";

@observer
class SelectInput extends React.Component{
    hasDisabled;
    render() {
        return (
            <div className="flex-column">
                <span>{this.props.label}</span>
                <select value={this.props.value} onChange={this.props.handler}>
                    {this.props.hasDisabled === true ? <option hidden>{this.props.disabled}</option> : null}
                    {this.props.items.map((options,i) =>(
                        <option key={i} id={options} value={options}>{options}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default SelectInput
