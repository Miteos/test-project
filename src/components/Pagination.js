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

export default Pagination;
