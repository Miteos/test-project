import React from 'react'
import SelectInput from "./inputs/SelectInput";
import {Link} from "react-router-dom";
import {Observer} from "mobx-react";

const TableFilters = ({store}) =>{
    return(
        <Observer>{()=>
        <div className="filters-table">
            <SelectInput
                label={'Filter by status'}
                value = {store.status}
                items={store.statusArray}
                handler ={store.handleFilterStatus}
            />
            <SelectInput
                label={'Sort table'}
                value = {store.sorted}
                items={store.sortArray}
                handler ={store.handleSort}
            />
            <button onClick={store.resetFilters}>Reset Filters</button>
            <Link to="/add-book"><button>Add Book</button></Link>
        </div>
        }</Observer>
    )
}
export default TableFilters
