import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate,active }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <span onClick={() => paginate(number)} className={active === number ? 'active':''}>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// import React from 'react';
// import {inject, observer} from "mobx-react";
// import {computed} from "mobx";
//
// @inject('rootStore')
// @observer
// class Pagination extends React.Component {
//     store = this.props.rootStore.paginationViewStore;
//     @computed get getPaginated() {
//         for (let i = 1; i <= Math.ceil(this.props.totalItems / this.store.itemsPerPage); i++) {
//             this.pageNumbers.push(i);
//         }
//         return console.log(this.pageNumbers)
//     }
//     pageNumbers=[];
//     render (){
//         this.store.itemsPerPage = this.props.itemsPerPage;
//
//         return (
//             <div>
//                 <ul className='pagination'>
//                     {this.store.pageNumbers.map((number,i) => (
//                         <li key={i} >
//                         <span onClick={()=>this.store.paginate(number)} className={this.store.active === number ? 'active':''}>
//                             {number}
//                         </span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }

export default Pagination;
