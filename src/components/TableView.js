import React, {useEffect} from 'react'
import {Observer} from 'mobx-react'
import SearchInput from "./inputs/SearchInput";
import SelectInput from "./inputs/SelectInput";
import PaginationView from "./PaginationView";
import Spinner from "./animations/Spinner";



const TableView = ({data}) => {
    const store = data;
    const raceArray =['All','Human','Dwarf','Elf','Maiar','Dragons'];
    const genderArray =['All','Female','Male'];
    const sortArray = ['Ascending','Descending'];

    useEffect(() => {
           store.getData();
        }, [store]);

         return(
             <Observer>{()=>
                 <div className="container">
                     <div className="filters-table">
                         <SearchInput
                             label={'Search by name'}
                             handler={store.handleSearch}
                         />
                         <SelectInput
                             label={'Filter by race'}
                             value = {store.race}
                             items={store.raceArray}
                             handler ={store.handleFilterRace}
                         />
                         <SelectInput
                             label={'Filter by gender'}
                             value = {store.gender}
                             items={store.genderArray}
                             handler ={store.handleFilterGender}
                         />
                         <SelectInput
                             label={'Sort table'}
                             value = {store.sorted}
                             items={store.sortArray}
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
                         {data.apiData.length ===0 ?  <tr>
                             <td colSpan="5">By the Shire! No one goes by that name! Try again ...</td>
                         </tr>:null}
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
