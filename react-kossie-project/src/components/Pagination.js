import React from "react";
import propTypes from "prop-types";
const Pagination = ({ currentPage, numberOfPages, onClick1, limit }) => {
  const currentSet = Math.ceil(currentPage / limit);// 6/5 ->2    7/5->2 현재세트번호
  const lastSet = Math.ceil(numberOfPages / limit); //  27/5 ->6  세트
  const startPage = limit * (currentSet - 1) + 1; // 5*(2-1)+1 = 6  현제세트시작번호

  const numberOfPageForSet =//한세트의 페이지넘버개수
    currentSet === lastSet ? numberOfPages % limit : limit; //27%5 ->맨 마지막 페이지 2개남음.아니면 5개.
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {currentSet !== 1 && (
          <li className="page-item ">
            <div
              className="page-link cursor-pointer"
              onClick={() => onClick1(startPage - limit)}
            >
              Previous
            </div>
          </li>
        )}
        {Array(numberOfPageForSet)//limit(5)개의 배열생성
          .fill(startPage)//배열의 값을 startPage넘버로 채운다. ex) 6 6 6 6 6 
          .map((value, index) => value + index)// 하나씩 index번호를 더해준다 ex) 6 7 8 9 10
          .map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                {/* onClick함수는 부모컴퍼넌트의 getPosts이다. */}
                <div
                  className="page-link cursor-pointer"
                  onClick={() => {
                    onClick1(pageNumber);
                  }}
                >
                  {pageNumber}
                </div>
              </li>
            );
          })}
        {currentSet !== lastSet && (
          <li className="page-item">
            <div
              className="page-link cursor-pointer"
              onClick={() => onClick1(startPage + limit)}//현재 세트의 starPage에서 다음 세트로넘어가기.
            >
              Next
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number,
  numberOfPages: propTypes.number.isRequired,
  onClick1: propTypes.func.isRequired,
  limit: propTypes.number,
};
Pagination.defaultProps = {
  currentPage: 1,
  limit: 5, // 한페이지당 페이지네이션 개수5개만 보이게함
};

export default Pagination;
