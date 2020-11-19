import React from 'react'
import {createTableStore} from './TableStore'
import { useLocalObservable } from 'mobx-react'

const TableContext = React.createContext(null);

export const TableProvider = ({children}) => {
    const tableStore =useLocalObservable(createTableStore);

    return <TableContext.Provider value={tableStore}>
        {children}
    </TableContext.Provider>
}

export const useTableStore = () => React.useContext(TableContext);
