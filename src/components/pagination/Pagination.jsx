import React, { useState } from "react"
import "./Pagination.scss"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const Pagination = ({ currentPage, onNextPage, onPreviousPage, onSetPage }) => {
  let width = useCurrentWitdh()
  const [page, setPage] = useState(currentPage)
  const handleNextPage = () => {
    setPage(page + 1)
    onNextPage()
  }
  const handlePreviousPage = () => {
    setPage(page - 1)
    onPreviousPage()
  }

  const handleBlur = (e) => {
    if (e.target.value) {
      onSetPage(e.target.value)
    } else {
      setPage(currentPage)
    }
  }

  return (
    <div className='pagination'>
      <button
        className='btn btn-left'
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}>
        <ArrowBackIosIcon /> {width < 576 && `Trang trước`}
      </button>
      <div className='number'>
        <form onSubmit={() => onSetPage(page)}>
          <input
            type='number'
            value={page}
            onChange={(e) => setPage(e.target.value)}
            onBlur={handleBlur}
          />
        </form>
      </div>
      <button className='btn btn-right' onClick={handleNextPage}>
        {width < 576 && `Trang sau`} <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Pagination
