import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className='row'>
            <nav className='mx-auto'>
                <ul className='pagination'>
                    {pageNumber.map(number => (
                        <li key={number} className='page-item'>
                            <a href='!#' onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;
