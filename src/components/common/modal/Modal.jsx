import React, { useState } from "react"
import "./Modal.scss"
import { createPortal } from "react-dom"

const Modal = ({ isShowing, hide, children, title, submit }) =>
  isShowing
    ? createPortal(
        <>
          <div className='modal-backdrop' onClick={hide}></div>
          <div className='modal-wrapper'>
            <div className='modal'>
              <div className='modal__header'>{title}</div>
              <div className='modal__body'>{children}</div>
              <div className='modal__footer'>
                <button className='btn' onClick={hide}>
                  Hủy bỏ
                </button>
                <button className='btn btn-save' onClick={submit}>
                  Lưu lại
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default Modal
