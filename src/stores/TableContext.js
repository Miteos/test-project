// import React from 'react'
// import {TableViewStore} from './TableViewStore'
// import {Provider} from "mobx-react";
// import {Mox}
// import {NewBookViewStore} from "./NewBookViewStore";
// import {PaginationViewStore} from "./PaginationViewStore";
//
// // const TableContext = React.createContext(null);
//
// export const TableProvider = ({children}) => {
//     const tableStore = new TableViewStore();
//     const newBookViewStore = new NewBookViewStore(tableStore);
//     const paginationViewStore = new PaginationViewStore (tableStore);
//     return(
//         <Provider paginationViewStore={paginationViewStore} tableStore = {tableStore} newBookViewStore = {newBookViewStore}>
//             {children}
//         </Provider>
//     )
// };
//
// // export const useStores = () => React.useContext(TableContext);
