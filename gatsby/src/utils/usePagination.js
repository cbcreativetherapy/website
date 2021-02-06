import { useState } from 'react';

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);

  function next() {
    setCurrentPage((currentPageNum) => Math.min(currentPageNum + 1, maxPage));
  }

  function previous() {
    setCurrentPage((currentPageNum) => Math.max(currentPageNum - 1, 1));
  }

  function currentItems() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return items.slice(begin, end);
  }

  return [next, previous, currentItems, currentPage, maxPage];
}

export default usePagination;
