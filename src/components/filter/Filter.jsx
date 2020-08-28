import React, { useState, useEffect } from "react"
import "./Filter.scss"
import CancelIcon from "@material-ui/icons/Cancel"
import { ReactComponent as ArtworkIcon } from "../../assets/icons/artwork.svg"
import { accountClasses } from "../../shared/enums/accountLabelEnum"

const Filter = ({
  label,
  status,
  keyword,
  setLabel,
  setStatus,
  setKey,
  setCurrentPage,
}) => {
  const [toggleStatus, setToggleStatus] = useState(false)
  useEffect(() => {
    if (status === "") return setToggleStatus(false)
    if (Number(status) === 1 || Number(status) === 0)
      return setToggleStatus(true)
  }, [status])

  function onClear() {
    setKey("")
    setLabel("")
    setStatus("")
    setCurrentPage(1)
    setToggleStatus(false)
  }

  if (!(keyword || label || toggleStatus)) return <div></div>

  return (
    <div className='filter'>
      {(keyword || label || status === 0 || toggleStatus) && (
        <div className='icon-clear clickable'>
          <ArtworkIcon onClick={onClear} />
        </div>
      )}

      {keyword && (
        <div className='filter__item'>
          <strong>Từ khóa:&nbsp;</strong> {keyword}{" "}
          <CancelIcon
            className='clickable icon-remove'
            onClick={() => {
              setKey("")
              setCurrentPage(1)
            }}
          />
        </div>
      )}

      {label && (
        <div className='filter__item'>
          <strong>Nhãn:&nbsp;</strong>{" "}
          {accountClasses.map((item) => {
            if (item.value === Number(label)) return item.name
          })}
          <CancelIcon
            className='clickable icon-remove'
            onClick={() => {
              setLabel("")
              setCurrentPage(1)
            }}
          />
        </div>
      )}

      {toggleStatus && (
        <div className='filter__item'>
          <strong>Trạng thái:&nbsp;</strong>{" "}
          {Number(status) === 1 && "Hoạt động"}
          {Number(status) === 0 && "Không hoạt động"}{" "}
          <CancelIcon
            className='clickable icon-remove'
            onClick={() => {
              setStatus("")
              setToggleStatus(false)
              setCurrentPage(1)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Filter
