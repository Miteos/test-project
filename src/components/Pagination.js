import React from 'react';
import {Observer} from 'mobx-react'


const Pagination = ({ itemsPerPage, totalItems, paginate,active,currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Observer>{()=>
            <div>
                <ul className='pagination'>
                    {
                        pageNumbers.map(v => {
                            const isCurrent = v === currentPage;
                            const onClick = ev => {
                                ev.preventDefault();
                                paginate(v);
                            };
                            return (
                                <li
                                    className={ isCurrent ? 'active' : '' }
                                    onClick={onClick}
                                    key={v.toString()}
                                >

                                    <a className="page-link" href="">{v}</a>

                                </li>
                            );
                        })
                    }
                    {/*{pageNumbers.map((number,i) => (*/}
                    {/*    <li>*/}
                    {/*    <span  key={number.toString()}  onClick={() => paginate(number)} className={active === number ? 'active':''}>*/}
                    {/*        {number}*/}
                    {/*    </span>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
            </div>
        }
        </Observer>
        )
};

// import React from 'react';
// import {inject, observer} from "mobx-react";
// import {computed} from "mobx";
//
// @inject('rootStore')
// @observer
// class Pagination extends React.Component {
//     store = this.props.rootStore.paginationViewStore;
//
//     pageNumbers=[];
//     render (){
//         this.store.itemsPerPage = this.props.itemsPerPage;
//
//            for (let i = 1; i <= Math.ceil(this.props.totalItems / this.store.itemsPerPage); i++) {
//                this.pageNumbers.push(i);
//            }
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
