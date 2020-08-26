import React, { useState, useEffect, useRef } from "react"
import "./Item.scss"

import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { Tooltip, Select, MenuItem } from "@material-ui/core"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"

import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"
import {
  accountCredibility,
  accountClassLabel,
} from "../../shared/enums/accountTypeEnum"
import { accountClasses } from "../../shared/enums/accountLabelEnum"
import { authFetch } from "../../shared/authFetch"

const Item = ({ user }) => {
  const [label, setLabel] = useState(user.class)
  const [type, setType] = useState(user.classType || null)
  const [expanded, setExpanded] = useState(false)
  const loadedLabel = useRef(false)
  const loadedType = useRef(false)
  let width = useCurrentWitdh()

  useEffect(() => {
    if (width > 576) setExpanded(false)
  }, [width])

  useEffect(() => {
    if (loadedLabel.current) {
      handleChangeLabel()
    } else {
      loadedLabel.current = true
    }
  }, [label])

  useEffect(() => {
    if (loadedType.current) {
      handleChangeType()
    } else {
      loadedType.current = true
    }
  }, [type])

  function getStatus(status) {
    if (status) {
      return "Đang hoạt động"
    } else {
      return "Đang ngoại tuyến"
    }
  }

  async function handleChangeLabel() {
    const formData = new FormData()
    formData.set("pageId", user.id)
    formData.set("class", label)
    try {
      const { data } = await authFetch.post(
        `g/api/system/page/update_class`,
        formData
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function handleChangeType() {
    const formData = new FormData()
    formData.set("pageId", user.id)
    formData.set("classType", type)

    try {
      const { data } = await authFetch.post(
        `g/api/system/page/update_class_type`,
        formData
      )
    } catch (error) {
      console.error(error)
    }
  }

  function handleExpand() {
    if (width <= 576) {
      setExpanded(!expanded)
    }
  }

  function displayLabel() {
    return (
      <>
        <Select
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          IconComponent={ExpandMoreIcon}>
          {accountClasses.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </>
    )
  }

  function displayType() {
    return (
      <>
        {label === 1 && (
          <Select
            autoWidth={true}
            value={type}
            onChange={(e) => setType(e.target.value)}
            IconComponent={ExpandMoreIcon}>
            {accountCredibility.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        )}
        {label === 3 && (
          <Select
            autoWidth={true}
            value={type}
            onChange={(e) => setType(e.target.value)}
            IconComponent={ExpandMoreIcon}>
            {accountClassLabel.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </>
    )
  }

  return (
    <>
      <tr>
        <td>
          <div className='user' onClick={handleExpand}>
            <Tooltip title={getStatus(user.status)}>
              <img
                className={`user__avatar ${user.status && "online"}`}
                src={user.avatar}
                alt='avatar'
              />
            </Tooltip>
            <div className='user__info'>
              <div>
                <strong>{user.fullName}</strong>
              </div>
              <div>owner: {user.phoneOwner}</div>
            </div>
          </div>
        </td>
        {width > 576 && (
          <>
            <td align='right'>{displayLabel()}</td>
            <td align='right'>{displayType()}</td>
          </>
        )}

        <td align='center'>
          <MoreHorizIcon />
        </td>
      </tr>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <div className='expand'>
          <div className='row'>
            <label>Nhãn: </label>
            {displayLabel()}
          </div>
          {(label === 1 || label === 3) && (
            <div className='row'>
              <label>Loại: </label>
              {displayType()}
            </div>
          )}
        </div>
      </Collapse>
    </>
  )
}

export default Item
