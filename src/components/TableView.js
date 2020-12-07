import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import SearchView from "./SearchView";
import SelectInputView from "./inputs/SelectInputView";
import PaginationView from "./PaginationView";
import Spinner from "./animations/Spinner";



const TableView = ({data}) => {
    const store = data;
    const raceArray =['All','Human','Dwarf','Elf','Maiar','Dragons'];
    const genderArray =['All','Female','Male'];
    const sortArray = ['Ascending','Descending'];

    useEffect(() => {
           store.getData();
           store.getUnique()
        }, [store]);

         return(
             <Observer>{()=>
                 <div className="container">
                     <div className="filters-table">
                         <SearchView
                             label={'Search by name'}
                             handler={store.handleSearch}
                         />
                         <SelectInputView
                             label={'Filter by race'}
                             value = {store.race}
                             items={raceArray}
                             handler ={store.handleFilterRace}
                         />
                         <SelectInputView
                             label={'Filter by gender'}
                             value = {store.gender}
                             items={genderArray}
                             handler ={store.handleFilterGender}
                         />
                         <SelectInputView
                             label={'Sort table'}
                             value = {store.sorted}
                             items={sortArray}
                             handler ={store.handleSort}
                         />
                         <button onClick={store.resetFilters}>Reset Filters</button>
                     </div>
                     {store.loading === true ? <Spinner/> : null}
                     <table className="styled-table">
                         <thead>
                         <tr>
                             <th>Name</th>
                             <th>Gender</th>
                             <th>Race</th>
                             <th>WikiLink</th>
                             {/*<th></th>*/}
                         </tr>
                         </thead>
                         <tbody>
                         {data.apiData.map((b, i) => (
                             <tr key={i}>
                                 {b.length ===0  ? <tr>No entries found</tr> : null}
                                 <td>{b.name}</td>
                                 <td>{b.gender}</td>
                                 <td>{b.race}</td>
                                 <td><a href={b.wikiUrl} target="_blank">{b.wikiUrl}</a></td>
                                 {/*<td className="clickable" onClick={() => this.store.removeItem(b.id)}>x</td>*/}
                             </tr>
                         ))}
                         </tbody>
                     </table>
                     <PaginationView
                         currentPage={store.page}
                         lastPage = {store.lastPage}
                         itemsPerPage={store.limit}
                         handler={store.handlePagination}
                     />
                 </div>
             }
             </Observer>
 )
};
export default TableView
