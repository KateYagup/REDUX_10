import React from 'react';

const Pagination = ({ currentPage, increment, decrement }) => {
    return (
        <div className="pagination">
            <button
                className="btn"
                onClick={decrement}
            >
                ←
            </button>
            <span className="pagination__page">{currentPage}</span>
            <button
                className="btn"
                onClick={increment}
            >
                →
            </button>
        </div>
    )

}

export default Pagination;