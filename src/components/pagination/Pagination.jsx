import React from "react"
import "./Pagination.scss"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

const Pagination = ({ currentPage, onNextPage, onPreviousPage }) => {
  return (
    <div className='pagination'>
      <button onClick={onPreviousPage} disabled={currentPage <= 1}>
        <ArrowBackIosIcon /> Trang trước
      </button>
      <div className='number'>{currentPage}</div>
      <button onClick={onNextPage}>
        Trang sau <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Pagination
