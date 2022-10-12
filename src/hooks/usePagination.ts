import { useState } from 'react';

export const usePagination = (numberOfPages: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPages = 10;

    let pages = Array<any>();
    if (numberOfPages < maxPages) {
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i);
        }
    } else if (numberOfPages > maxPages && currentPage < maxPages) {
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
        pages.push('...');
        pages.push(numberOfPages);
    } else if (numberOfPages > maxPages && currentPage >= maxPages) {
        pages.push(1);
        pages.push('...');
        
        if (currentPage === numberOfPages) {
            for (let i = currentPage -8; i <= currentPage; i++) {
                if (i < numberOfPages) {
                    pages.push(i);
                }
            }
        } else {
            for (let i = currentPage -2; i <= currentPage +2; i++) {
                if (i < numberOfPages) {
                    pages.push(i);
                }
            }
        }

        if (currentPage < numberOfPages) {
            pages.push('...');
            pages.push(numberOfPages);
        } else if (currentPage === numberOfPages) {
            pages.push(numberOfPages)
        }
    }

    return {
        currentPage,
        setCurrentPage,
        pages,
    };
};