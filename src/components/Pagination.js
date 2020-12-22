import React from 'react';
import {Observer} from 'mobx-react'


// const Pagination = ({itemsPerPage, totalItems, handler,active}) => {
//     const pages = [];
//         for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//             pages.push(i);
//         }
//
//     return (
//         <Observer>{()=>
//             <div>
//                 <ul className='pagination'>
//                     {
//                         pages.map(v => {
//                             const isCurrent = v === active;
//                             const onClick = ev => {
//                                 ev.preventDefault();
//                                 handler(v);
//                             };
//                             return (
//                                 <li
//                                     className={ isCurrent ? 'active' : '' }
//                                     onClick={onClick}
//                                     key={v.toString()}
//                                 >
//                                     <span className="page-link">{v}</span>
//
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//             </div>
//         }
//         </Observer>
//         )
// };
const Pagination = ({ itemsPerPage, totalItems, handler,active }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Observer>{() =>
            <div>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number}>
                        <span onClick={() => handler(number)} className={active === number ? 'active' : ''}>
                            {number}
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        }</Observer>
    );
};

export default Pagination;
