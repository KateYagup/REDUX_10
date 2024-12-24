import React from 'react';

const Pagination = ({ currentPage, totalPages, goNext, goPrev }) => {
    let isPrevPageAvailable = true;
    let isNextPageAvailable = false;
    if (currentPage === 0) isPrevPageAvailable = true
    else isPrevPageAvailable = false;
    if (currentPage === totalPages - 1) isNextPageAvailable = true
    else isNextPageAvailable = false;

    return (
        < div className="pagination" >
            <button
                className="btn"
                onClick={goPrev}
                disabled={isPrevPageAvailable}
            >
                {!isPrevPageAvailable && '←'}
            </button>
            < span className="pagination__page" > {currentPage + 1}</span >
            <button
                className="btn"
                onClick={goNext}
                disabled={isNextPageAvailable}
            >
                {!isNextPageAvailable && '→'}
            </button>
        </div >
    )
}

export default Pagination;