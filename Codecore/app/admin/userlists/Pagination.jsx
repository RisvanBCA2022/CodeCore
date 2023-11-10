import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ userperpage, totalUsers, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userperpage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <a
              onClick={() => handlePageClick(number)}
              className={`pagination-link ${number === currentPage ? 'active' : ''}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
