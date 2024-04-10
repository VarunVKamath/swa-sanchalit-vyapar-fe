import React, { useCallback } from "react";
// import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Pagination.scss";

const Pagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
  displayDescription = true,
  extraStyle = undefined,
}) => {
  const handlePrevious = useCallback(
    () => onChangePage(currentPage - 1),
    [currentPage, onChangePage]
  );
  const handleNext = useCallback(
    () => onChangePage(currentPage + 1),
    [currentPage, onChangePage]
  );
  const handleFirst = useCallback(() => onChangePage(1), [onChangePage]);

  // const handleRowsPerPage = useCallback(
  //   ({ target }) => onChangeRowsPerPage(Number(target.value), currentPage),
  //   [currentPage, onChangeRowsPerPage]
  // );

  const numberOfPages = Math.ceil(rowCount / rowsPerPage);

  const handleLast = useCallback(
    () => onChangePage(numberOfPages),
    [onChangePage, numberOfPages]
  );

  return (
    <div className={`page ${numberOfPages === 1 ? "" : ""}`} style={extraStyle}>
      {displayDescription && (
        <p className="pagText d-none d-xxl-block">
          {/* <span>DISPLAYING</span>  */}
          {currentPage} OF {numberOfPages} {/* <span>entries</span> */}
          {/* <span>DISPLAYING</span> {currentPage} OF {numberOfPages}{" "}
          <span>entries</span> */}
        </p>
      )}

      <button onClick={handleFirst} className="pagBtn -big d-none d-md-block">
        First
      </button>

      <button
        className={`pagBtn -arrow`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <AiOutlineArrowLeft className="pagIcon" />
      </button>

      <button
        onClick={() => onChangePage(1)}
        className={`pagBtn -num ${currentPage === 1 ? "-active" : ""}`}
      >
        1
      </button>

      {currentPage <= 2 && numberOfPages > 1 && (
        <button
          onClick={() => onChangePage(2)}
          className={`pagBtn -num ${currentPage === 2 ? "-active" : ""}`}
        >
          2
        </button>
      )}

      {currentPage > 2 && numberOfPages > 2 && currentPage !== numberOfPages && (
        <>
          <div className="pagPoints">...</div>
          <button
            onClick={() => onChangePage(currentPage)}
            className={`pagBtn -num -active`}
          >
            {currentPage}
          </button>
        </>
      )}

      {numberOfPages >= 3 && (
        <>
          {currentPage !== numberOfPages - 1 && numberOfPages > 3 && (
            <div className="pagPoints">...</div>
          )}
          {currentPage === numberOfPages && (
            <button
              onClick={() => onChangePage(numberOfPages - 1)}
              className={`pagBtn -num`}
            >
              {numberOfPages - 1}
            </button>
          )}
          <button
            onClick={() => onChangePage(numberOfPages)}
            className={`pagBtn -num ${
              currentPage === numberOfPages ? "-active" : ""
            }`}
          >
            {numberOfPages}
          </button>
        </>
      )}

      <button
        className={`pagBtn -arrow`}
        onClick={handleNext}
        disabled={currentPage === numberOfPages}
      >
        <AiOutlineArrowRight className="pagIcon" />
      </button>

      <button onClick={handleLast} className="pagBtn -big d-none d-md-block">
        Last
      </button>
    </div>
  );
};

Pagination.propTypes = {
  // rowsPerPage: PropTypes.number.isRequired,
  // rowCount: PropTypes.number.isRequired,
  // onChangePage: PropTypes.func.isRequired,
  // onChangeRowsPerPage: PropTypes.func.isRequired,
  // currentPage: PropTypes.number.isRequired,
};

export default Pagination;
