import React, { useState, useEffect, useRef } from "react"
import "./Item.scss"

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
// import { useToasts } from "react-toast-notifications"

const Item = ({ user }) => {
  const accClass = accountClasses.filter((item) => item.value === user.class)

  const [label, setLabel] = useState(accClass.length === 0 ? 0 : user.class)
  const [type, setType] = useState(user.classType || "")
  const [expanded, setExpanded] = useState(false)
  const loadedLabel = useRef(false)
  const loadedType = useRef(false)
  let width = useCurrentWitdh()
  // const { addToast } = useToasts()

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
      return "Hoạt động"
    } else {
      return "Không hoạt động"
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
      // addToast("Saved Successfully", {
      //   appearance: "success",
      //   autoDismiss: true,
      // })
    } catch (error) {
      // addToast("Error", { appearance: "error", autoDismiss: true })
      console.log(error)
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
      // addToast("Saved Successfully", {
      //   appearance: "success",
      //   autoDismiss: true,
      // })
    } catch (error) {
      // addToast("Error", { appearance: "error", autoDismiss: true })
      console.log(error)
    }
  }

  function handleExpand() {
    if (width <= 576) {
      setExpanded(!expanded)
    }
  }

  function displayLabel() {
    return (
      <div className='select-container'>
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
      </div>
    )
  }

  function displayType() {
    return (
      <>
        {label === 1 && (
          <div className='select-container'>
            <Select
              autoWidth={true}
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
              displayEmpty
              IconComponent={ExpandMoreIcon}>
              <MenuItem disabled value=''>
                <span className='disabled-item'>Chưa phân loại</span>
              </MenuItem>

              {accountCredibility.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </div>
        )}
        {label === 3 && (
          <div className='select-container'>
            <Select
              autoWidth={true}
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
              displayEmpty
              IconComponent={ExpandMoreIcon}>
              <MenuItem disabled value=''>
                <span className='disabled-item'>Chưa phân loại</span>
              </MenuItem>

              {accountClassLabel.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <tr className='table-row'>
        <td>
          <div className='user' onClick={handleExpand}>
            <Tooltip title={getStatus(user.status)}>
              <img
                className={`user__avatar ${user.status && "online"}`}
                src={
                  user.avatar ||
                  "http://vietid.vcmedia.vn/thumb_w/100/vietid/image/avatars/default.png"
                }
                alt='avt'
              />
            </Tooltip>
            <div className='user__info'>
              <div className='user__info__name'>{user.fullName}</div>
              <div>owner: {user.phoneOwner}</div>
            </div>
          </div>
        </td>
        {width > 576 && (
          <>
            <td width='200' align='right'>
              {displayLabel()}
            </td>
            <td width='200' align='right'>
              {displayType()}
            </td>
          </>
        )}

        <td width='100' align='center'>
          <MoreHorizIcon className='icon icon-edit' />
          <ExpandMoreIcon className='icon icon-expand' />
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
