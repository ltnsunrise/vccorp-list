import React from "react"
import "./Filter.scss"
import CancelIcon from "@material-ui/icons/Cancel"
import { ReactComponent as ArtworkIcon } from "../../assets/icons/artwork.svg"
import { accountClasses } from "../../shared/enums/accountLabelEnum"

const Filter = ({ label, status, keyword, setLabel, setStatus, setKey }) => {
  function onClear() {
    setKey(``)
    setLabel(``)
    setStatus(``)
  }

  return (
    <div className='filter'>
      {(keyword || label || status === 0 || status === 1) && (
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
              setKey(``)
            }}
          />
        </div>
      )}

      {label && (
        <div className='filter__item'>
          <strong>Nhãn:&nbsp;</strong>{" "}
          {accountClasses.map((item) => {
            if (item.value === label) return item.name
          })}
          <CancelIcon
            className='clickable icon-remove'
            onClick={() => {
              setLabel(``)
            }}
          />
        </div>
      )}

      {(status === 0 || status === 1) && (
        <div className='filter__item'>
          <strong>Trạng thái:&nbsp;</strong>{" "}
          {status ? "Hoạt động" : "Không hoạt động"}{" "}
          <CancelIcon
            className='clickable icon-remove'
            onClick={() => {
              setStatus("")
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Filter
