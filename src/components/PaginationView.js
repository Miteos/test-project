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
                                    <span className="page-link">{v}</span>

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


export default PaginationView;
