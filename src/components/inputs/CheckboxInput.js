import React from 'react'
import {observer} from "mobx-react";

@observer
class CheckboxInput extends React.Component{
    render() {
        return (
            <div className="flex-row">
                <span>{this.props.label}</span>
                <input type="checkbox" value={this.props.value} onChange={this.props.handler}>
                </input>
            </div>
        );
    }
}

export default CheckboxInput
