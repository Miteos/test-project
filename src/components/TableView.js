import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import SelectInput from "./inputs/SelectInput";
// import PaginationView from "./PaginationView";
import Spinner from "./animations/Spinner";
import {Link} from "react-router-dom";



const TableView = ({data}) => {
    const store = data;

    useEffect(() => {
           store.getData();
        }, [store]);

         return(
             <Observer>{()=>
                 <div className="container">
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
                     {store.loading === true ? <Spinner/> : null}
                     <table className="styled-table">
                         <thead>
                         <tr>
                             <th>ID</th>
                             <th>Author</th>
                             <th>Title</th>
                             <th>Status</th>
                             <th></th>
                             <th></th>
                         </tr>
                         </thead>
                         <tbody>
                         {data.apiData.length ===0 ?  <tr>
                             <td colSpan="6">Whoops! Seems like The Great Library is not so great...</td>
                         </tr>:null}
                         {data.apiData.map((b, i) => (
                             <tr key={i}>
                                 {b.length ===0  ? <tr>No entries found</tr> : null}
                                 <td>{b.id.substr(0,5) +'...'}</td>
                                 <td>{b.author}</td>
                                 <td>{b.title}</td>
                                 <td>{b.status}</td>
                                    <td className="clickable"> <Link to={`/edit-book/${b.id}`}>Edit entry</Link></td>
                                 <td className="clickable" onClick={()=>store.deleteBook(b.id)}>x</td>
                             </tr>
                         ))}
                         </tbody>
                     </table>
                     {/*<PaginationView*/}
                     {/*    currentPage={store.page}*/}
                     {/*    lastPage = {store.lastPage}*/}
                     {/*    itemsPerPage={store.limit}*/}
                     {/*    handler={store.handlePagination}*/}
                     {/*/>*/}
                 </div>
             }
             </Observer>
 )
};
// @inject('rootStore')
// @observer
// export class TableView extends React.Component{
//     componentDidMount() {
//
//         }
//     render (){
//         return(
//             <button onClick={this.props.rootStore.tableStore.totalProducts}>test</button>
//         )
//
//     }
//
// }
export default TableView
