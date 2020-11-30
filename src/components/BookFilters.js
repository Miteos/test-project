import React from 'react'
import {inject, observer} from "mobx-react";

@inject('rootStore')
@observer
class BookFilters extends React.Component{
    store = this.props.rootStore.filterViewStore;
    render() {
        return (
            <div className='inputs'>
            <select value={this.store.input} onChange={this.store.onChange}>
                {this.store.optionsArray.map((options,i) =>(
                    <option key={i} value={options}>{options}</option>
                ))}
            </select>
            <button>Filter</button>
        </div>
        );
    }
}

export default BookFilters
