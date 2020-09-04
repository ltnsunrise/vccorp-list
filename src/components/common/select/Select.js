import React, { useState, useEffect } from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import "./Select.scss"

const normalizeText = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
}

const Select = ({ options, placeholder, onSelect }) => {
  const [activeOption, setActiveOption] = useState(0)
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [userInput, setUserInput] = useState("")

  const onChange = (e) => {
    setShowOptions(true)
    setUserInput(e.currentTarget.value)
  }

  useEffect(() => {
    const filteredOpts = options.filter((option) =>
      normalizeText(option.name).includes(normalizeText(userInput))
    )
    setActiveOption(0)
    setFilteredOptions(filteredOpts)
  }, [userInput])

  const onClick = (e) => {
    setActiveOption(0)
    setFilteredOptions(options)
    setShowOptions(false)
    setUserInput(e.name)
    onSelect(e.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveOption(0)
      setShowOptions(false)
      setUserInput(filteredOptions[activeOption]["name"])
      onSelect(filteredOptions[activeOption]["value"])
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return
      }
      setActiveOption(activeOption - 1)
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return
      }
      setActiveOption(activeOption + 1)
    }
  }

  let optionList
  if (showOptions) {
    if (filteredOptions.length) {
      optionList = (
        <ul className='options'>
          {filteredOptions.map((option, index) => {
            let className
            if (index === activeOption) {
              className = "option-active"
            }
            return (
              <li
                className={className}
                key={option.value}
                onClick={() => onClick(option)}>
                {option.name}
              </li>
            )
          })}
        </ul>
      )
    } else if (filteredOptions.length === 0) {
      optionList = (
        <div className='no-options'>
          <em>không có kết quả</em>
        </div>
      )
    }
  }

  return (
    <div className='select'>
      {showOptions && (
        <div
          className='select-overlay'
          onClick={() => setShowOptions(!showOptions)}></div>
      )}
      <div className='select-field'>
        <input
          type='text'
          className='text-field'
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          onClick={(event) => {
            event.preventDefault()
            setShowOptions(!showOptions)
          }}
          placeholder={placeholder}
        />
        {showOptions ? (
          <ArrowDropUpIcon
            className='icon'
            onClick={() => setShowOptions(!showOptions)}
          />
        ) : (
          <ArrowDropDownIcon
            className='icon'
            onClick={() => setShowOptions(!showOptions)}
          />
        )}
      </div>
      <div className='options-list'>{optionList}</div>
    </div>
  )
}

export default Select
