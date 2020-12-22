import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import Spinner from "./animations/Spinner";
import Table from "./Table";
import TableFilters from "./TableFilters";

const TableView = ({data}) => {
    const store = data;

    useEffect(() => {
           store.getData();
        }, []);

         return(
             <Observer>{()=>
                 <div className="container">
                     <TableFilters store={store}/>
                     {store.loading === true ? <Spinner/> : null}
                     <Table store = {store}/>
                 </div>
             }
             </Observer>
 )
};
export default TableView
