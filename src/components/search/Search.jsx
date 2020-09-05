import React, { useState, useRef } from "react"
import "./Search.scss"
import { accountClasses } from "../../shared/enums/accountLabelEnum"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import ClearIcon from "@material-ui/icons/Clear"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"
import Select from "../common/select/Select"

const statusList = [
  { name: "Hoạt động", value: 1 },
  { name: "Không hoạt động", value: 0 },
]

const Search = ({
  label,
  status,
  keyword,
  setLabel,
  setStatus,
  setKey,
  setCurrentPage,
}) => {
  const [l, setL] = useState(label)
  const [k1, setK1] = useState("")
  const [k, setK] = useState(keyword || k1)
  const [s, setS] = useState(status)
  const [filterToggle, setFilterToggle] = useState(false)
  const width = useCurrentWitdh()
  const form = useRef(null)

  function resetParam() {
    setL("")
    setK("")
    setK1("")
    setS("")
    setCurrentPage(1)
  }

  function onSubmitAll(e) {
    e.preventDefault()
    setFilterToggle(false)
    setKey(k)
    setLabel(l)
    setStatus(s)
    resetParam()
  }

  function onSubmitkey(e) {
    e.preventDefault()
    setKey(k1)
    resetParam()
  }

  const handleToggle = () => {
    setFilterToggle(!filterToggle)
  }

  return (
    <div className='search'>
      <form onSubmit={onSubmitkey}>
        <div className='search-box'>
          {width < 576 ? (
            <div>
              <SearchIcon className='icon icon-search' onClick={handleToggle} />
            </div>
          ) : (
            <>
              <div className='search-box__p1'>
                <SearchIcon
                  className='icon icon-search'
                  onClick={onSubmitkey}
                />
                <input
                  type='text'
                  value={k1}
                  onChange={(e) => setK1(e.target.value)}
                  placeholder='Tìm kiếm...'
                />
              </div>
              <div className='search-box__p2'>
                {k1 && (
                  <ClearIcon
                    className='icon icon-clear-input'
                    onClick={() => setK1("")}
                  />
                )}
                {filterToggle ? (
                  <ArrowDropUpIcon className='icon' onClick={handleToggle} />
                ) : (
                  <ArrowDropDownIcon className='icon' onClick={handleToggle} />
                )}
              </div>
            </>
          )}
        </div>
      </form>
      {filterToggle && (
        <form onSubmit={onSubmitAll} ref={form}>
          <div
            className='search-overlay'
            onClick={() => setFilterToggle(!filterToggle)}></div>
          <div className='form'>
            <ArrowBackIcon
              className='icon icon-back'
              onClick={() => setFilterToggle(!filterToggle)}
            />

            <input
              type='text'
              value={k}
              onChange={(e) => setK(e.target.value)}
              placeholder='Tìm kiếm...'
            />
            <Select
              options={accountClasses}
              placeholder='Nhãn phân loại'
              onSelect={(e) => setL(e)}
            />
            <Select
              options={statusList}
              placeholder='Trạng thái'
              onSelect={(e) => setS(e)}
            />

            <button className='btn' type='submit'>
              Tìm kiếm
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Search
