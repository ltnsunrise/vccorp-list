import React from "react"
import "./Pagination.scss"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const Pagination = ({ currentPage, onNextPage, onPreviousPage }) => {
  let width = useCurrentWitdh()

  return (
    <div className='pagination'>
      <button
        className='btn btn-left'
        onClick={onPreviousPage}
        disabled={currentPage <= 1}>
        <ArrowBackIosIcon /> {width < 576 && `Trang trước`}
      </button>
      <div className='number'>{currentPage}</div>
      <button className='btn btn-right' onClick={onNextPage}>
        {width < 576 && `Trang sau`} <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Pagination
