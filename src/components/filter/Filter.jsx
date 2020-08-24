import React, { useState } from "react"
import "./Filter.scss"
import ClearIcon from "@material-ui/icons/Clear"
import CancelIcon from "@material-ui/icons/Cancel"
import { v4 as uuid } from "uuid"
import { ReactComponent as ArtworkIcon } from "../../assets/icons/artwork.svg"

const filterList = [
  { id: uuid(), name: "Từ khóa", value: "HKT" },
  { id: uuid(), name: "Nhãn", value: "HKT" },
  { id: uuid(), name: "Trạng thái", value: "HKT" },
]

const Filter = () => {
  const [list, setList] = useState(filterList)

  function onClear() {
    setList([])
  }

  function onRevove(id) {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <div className='filter'>
      <div className='icon-clear clickable'>
        <ArtworkIcon onClick={onClear} />
      </div>

      {list.length > 0 &&
        list.map((item) => (
          <div key={item.id} className='filter__item'>
            <strong>{item.name}:&nbsp;</strong> {item.value}{" "}
            <CancelIcon
              className='clickable icon-remove'
              onClick={() => onRevove(item.id)}
            />
          </div>
        ))}
    </div>
  )
}

export default Filter
