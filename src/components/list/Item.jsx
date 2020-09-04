import React, { useState, useEffect, memo, useCallback } from "react"
import "./Item.scss"

import { Tooltip } from "@material-ui/core"
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
import Modal from "../common/modal/Modal"

const Item = ({ user }) => {
  const isOther = accountClasses.some((item) => item.value === user.class)
  const [label, setLabel] = useState(isOther ? user.class : 0)

  const [showLabel, setShowLabel] = useState(false)
  const [showType, setShowType] = useState(false)

  const [type, setType] = useState(user.classType || "")
  const [expanded, setExpanded] = useState(false)
  let width = useCurrentWitdh()

  useEffect(() => {
    if (width > 576) setExpanded(false)
  }, [width])

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
    setShowLabel(false)

    try {
      await authFetch.post(`g/api/system/page/update_class`, formData)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleChangeType() {
    const formData = new FormData()
    formData.set("pageId", user.id)
    formData.set("classType", type)
    setShowType(false)

    try {
      await authFetch.post(`g/api/system/page/update_class_type`, formData)
    } catch (error) {
      console.log(error)
    }
  }

  function handleExpand() {
    if (width <= 576) {
      setExpanded(!expanded)
    }
  }

  const displayLabel = () => (
    <>
      <Modal
        title='Nhãn'
        submit={handleChangeLabel}
        isShowing={showLabel}
        hide={() => setShowLabel(!showLabel)}>
        <div
          onChange={(e) => {
            setLabel(e.target.value)
          }}>
          {accountClasses.map((item) => (
            <div key={item.value} className='item-radio'>
              <label>
                <input
                  type='radio'
                  name='label'
                  value={item.value}
                  defaultChecked={user.class === item.value}
                />
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </Modal>
      <div
        className='select-container'
        onClick={() => setShowLabel(!showLabel)}>
        {accountClasses.map((item) => {
          if (item.value === user.class) {
            return item.name
          }
        })}
        {accountClasses.filter((item) => item.value === user.class).length ===
          0 && "Khác"}{" "}
        <ExpandMoreIcon className='icon-expand' />
      </div>
    </>
  )

  function displayType() {
    return (
      <>
        {label === 1 && (
          <>
            <Modal
              title='Loại'
              submit={handleChangeType}
              isShowing={showType}
              hide={() => setShowType(!showType)}>
              {accountCredibility.map((item) => (
                <div key={item.value} className='item-radio'>
                  <label>
                    <input
                      type='radio'
                      name='label'
                      defaultChecked={user.classType === item.value}
                      onChange={(e) => setType(e.target.value)}
                    />
                    {item.name}
                  </label>
                </div>
              ))}
            </Modal>
            <div
              className='select-container'
              onClick={() => setShowType(!showType)}>
              {accountCredibility.map((item) => {
                if (item.value === user.classType) {
                  return item.name
                }
              })}{" "}
              {accountCredibility.filter(
                (item) => item.value === user.classType
              ).length === 0 && (
                <span className='not-classified'>Chưa phân loại</span>
              )}{" "}
              <ExpandMoreIcon className='icon-expand' />
            </div>
          </>
        )}
        {label === 3 && (
          <div>
            <Modal
              title='Loại'
              submit={handleChangeType}
              isShowing={showType}
              hide={() => setShowType(!showType)}>
              {accountClassLabel.map((item) => (
                <div key={item.value} className='item-radio'>
                  <label>
                    <input
                      type='radio'
                      name='label'
                      value={item.value}
                      defaultChecked={user.classType === item.value}
                      onChange={(e) => setType(e.target.value)}
                    />
                    {item.name}
                  </label>
                </div>
              ))}
            </Modal>
            <div
              className='select-container'
              onClick={() => setShowType(!showType)}>
              {accountClassLabel.map((item) => {
                if (item.value === user.classType) {
                  return item.name
                }
              })}{" "}
              {accountClassLabel.filter((item) => item.value === user.classType)
                .length === 0 && (
                <span className='not-classified'>Chưa phân loại</span>
              )}{" "}
              <ExpandMoreIcon className='icon-expand' />
            </div>
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

        <td width='100' align='center' className='edit-colmn'>
          <MoreHorizIcon className='icon icon-edit' />
          <ExpandMoreIcon className='icon icon-expand' />
        </td>
      </tr>
      {/* <div className={`hide ${expanded && "active"}`}> */}

      <div className={expanded ? "active" : "hide"}>
        <div className='expand'>
          <div className='row'>
            <label className='label'>Nhãn: </label>
            {displayLabel()}
          </div>
          {(label === 1 || label === 3) && (
            <div className='row'>
              <label className='type'>Loại: </label>
              {displayType()}
            </div>
          )}
        </div>
      </div>

      {/* {expanded && (
        <div className='expand'>
          <div className='row'>
            <label className='label'>Nhãn: </label>
            {displayLabel()}
          </div>
          {(label === 1 || label === 3) && (
            <div className='row'>
              <label className='type'>Loại: </label>
              {displayType()}
            </div>
          )}
        </div>
      )} */}
    </>
  )
}

export default memo(Item)
