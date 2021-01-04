import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import Spinner from "./animations/Spinner";
import Table from "./Table";
import TableFilters from "./TableFilters";

const TableView = ({data,pageUrl, hasAddButton,library}) => {
    const store = data;
    const url = pageUrl

    useEffect(() => {
           store.getData(url);
        }, []);

         return(
             <Observer>{()=>
                 <div className="container">
                     <TableFilters store={store}/>
                     {store.loading === true ? <Spinner/> : null}
                     <Table  store = {store} hasAddButton={hasAddButton}  libraryStore={library}/>
                 </div>
             }
             </Observer>
 )
};
export default TableView
