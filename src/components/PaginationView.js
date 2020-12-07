import React from 'react';
import {Observer} from 'mobx-react'


const PaginationView = ({handler,currentPage,lastPage }) => {
        const LENGTH = 5;
        const page = currentPage;

        const firstPageInSight = page <= Math.floor(LENGTH / 2);
        const lastPageInSight = lastPage - page <= Math.floor(LENGTH / 2);

        const firstNumber = lastPageInSight ? lastPage - LENGTH + 1 : page - 2;
        const lastNumber = firstPageInSight ? LENGTH : page + 2;

        const first = Math.max(1, firstNumber);
        const last = Math.min(lastPage, lastNumber);

        const pages = [];
        for (let i = first; i <= last; i++) {
            pages.push(i)
        }

    return (
        <Observer>{()=>
            <div>
                <ul className='pagination'>
                    {
                        pages.map(v => {
                            const isCurrent = v === currentPage;
                            const onClick = ev => {
                                ev.preventDefault();
                                handler(v);
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
// class PaginationView extends React.Component {
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

export default PaginationView;
