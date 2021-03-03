import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import Spinner from "./animations/Spinner";
import Table from "./Table";
import TableFilters from "./TableFilters";
import {SlideInFromLeft, SlideLeft} from "./animations/SlideInFromLeft";
import {SlideInFromRight} from "./animations/SlideInFromRight";
import {AnimateAppearComponent} from "./animations/AnimateAppearComponent";

const TableView = ({data, hasAddButton,library}) => {
    const store = data;

    useEffect(() => {
           store.getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

         return(
             <Observer>{()=>
                 <div className="container">
                    <AnimateAppearComponent>
                        <TableFilters store={store}/>
                    </AnimateAppearComponent>
                     {store.loading === true ? <Spinner/> : null}
                         <Table  store = {store} hasAddButton={hasAddButton}  libraryStore={library}/>
                 </div>
             }
             </Observer>
 )
};
export default TableView
