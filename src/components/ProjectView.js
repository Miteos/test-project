import React from 'react'
import DataTable from "./DataTable";
import Pagination from "./Pagination";
import NewBook from "./NewBook";
import {inject, observer} from "mobx-react";
import BookFilters from "./BookFilters";


@inject('rootStore')
@observer
class ProjectView extends React.Component{
    store = this.props.rootStore;
    render() {
        return(
            <div >
                <Pagination itemsPerPage={this.store.paginationViewStore.itemsPerPage}
                            totalItems={this.store.tableStore.data.length}
                            paginate={this.store.paginationViewStore.paginate}
                            active={this.store.paginationViewStore.current}/>
                <DataTable />
                <BookFilters/>
                <NewBook/>
            </div>

        )
    }
}
export default ProjectView
