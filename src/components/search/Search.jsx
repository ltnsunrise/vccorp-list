import React, { useState } from "react"
import "./Search.scss"
import { accountClasses } from "../../shared/enums/accountLabelEnum"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import Autocomplete from "@material-ui/lab/Autocomplete"
import ClearIcon from "@material-ui/icons/Clear"
import TextField from "@material-ui/core/TextField"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const statusList = [
  { name: "Hoạt động", value: 1 },
  { name: "Không hoạt động", value: 0 },
]

const Search = ({ label, status, keyword, setLabel, setStatus, setKey }) => {
  const [l, setL] = useState(label)
  const [k1, setK1] = useState("")
  const [k, setK] = useState(keyword || k1)
  const [s, setS] = useState(status)
  const [filterToggle, setFilterToggle] = useState(false)
  const width = useCurrentWitdh()

  const defaultPropsStatus = {
    options: statusList,
    getOptionLabel: (option) => option.name,
    getOptionSelected: (option, status) => option.value === status,
  }

  const defaultPropsLabel = {
    options: accountClasses,
    getOptionLabel: (option) => option.name,
    getOptionSelected: (option, label) => option.value === label,
  }

  function resetParam() {
    setL("")
    setK("")
    setK1("")
    setS("")
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
      <div></div>
      <form onSubmit={onSubmitkey}>
        <div className='search-box'>
          {width < 576 ? (
            <div>
              <SearchIcon
                className='icon icon-search'
                onClick={() => setFilterToggle(!filterToggle)}
              />
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
        <form onSubmit={onSubmitAll}>
          <div
            className='backdrop'
            onClick={() => setFilterToggle(!filterToggle)}></div>
          <div className='form'>
            <TextField
              type='text'
              value={k}
              onChange={(e) => setK(e.target.value)}
              placeholder='Tìm kiếm...'
            />
            <Autocomplete
              {...defaultPropsLabel}
              onChange={(e, v) => {
                if (v) {
                  setL(v.value)
                } else {
                  setL("")
                }
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder='Nhãn phân loại' value={l} />
              )}
            />
            <Autocomplete
              {...defaultPropsStatus}
              onChange={(e, v) => {
                if (v) {
                  setS(v.value)
                } else {
                  setS("")
                }
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder='Trạng thái' value={s} />
              )}
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
