import React, { memo } from "react"
import "./List.scss"

import Item from "./Item"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const List = ({ users }) => {
  let width = useCurrentWitdh()
  if (!users) return <div className='no-data'>Không có dữ liệu</div>

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <td>NHÀ SẢN XUẤT</td>
            {width > 576 && (
              <>
                <td width='200'>NHÃN</td>
                <td width='200'>LOẠI</td>
              </>
            )}
            <td width='100'></td>
          </tr>
        </thead>

        <tbody>
          {users && users.map((user) => <Item key={user?.id} user={user} />)}
        </tbody>
      </table>
    </>
  )
}

export default memo(List)
