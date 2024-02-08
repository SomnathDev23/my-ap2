import React from 'react'

const PagePagination = ({postsPerPage, totalPosts, peginate}) => {
    const pageNumbers = [];

    for(let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number =>(
                <li key={number} className='page-item'>
                    <a onClick={()=>peginate(number)} href='!#' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default PagePagination
