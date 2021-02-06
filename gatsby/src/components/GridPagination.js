import React from 'react';
import styled from 'styled-components';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const GalleryPaginationStyles = styled.div`
  .pagination {
    margin: 4rem auto;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 2rem;
      }
    }
    button {
      background-color: var(--main-bg);
      border: 2px solid var(--text-color);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 4rem;
      cursor: pointer;
      transition: background-color 0.4s;
      &:hover,
      &:focus {
        background-color: var(--accent-blue);
        transition: background-color 0.4s;
      }
    }
    .chevron-left {
      position: relative;
      left: -7px;
      top: 3px;
    }
    .chevron-right {
      position: relative;
      left: -3px;
      top: 3px;
    }
    .page-numbers {
      font-size: 3rem;
    }
    .current-page {
      position: relative;
      z-index: 10;
    }
    .current-page::after {
      content: '';
      border: 2px solid var(--accent-blue);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      left: -18px;
      top: -7px;
      z-index: -1;
    }
  }
`;

export default function GridPagination({
  currentPage,
  previous,
  next,
  maxPage,
}) {
  const prevPageNum = currentPage - 1;
  const nextPageNum = currentPage + 1;
  return (
    <GalleryPaginationStyles>
      {maxPage > 1 && (
        <div className="pagination">
          <ul>
            <li>
              <button type="button" onClick={previous}>
                <HiChevronLeft className="chevron-left" />
              </button>
            </li>
            {prevPageNum !== 0 && (
              <li className="page-numbers">{prevPageNum}</li>
            )}
            <li className="page-numbers current-page">{currentPage}</li>
            {currentPage !== maxPage && (
              <li className="page-numbers">{nextPageNum}</li>
            )}
            <li>
              <button type="button" onClick={next}>
                <HiChevronRight className="chevron-right" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </GalleryPaginationStyles>
  );
}
