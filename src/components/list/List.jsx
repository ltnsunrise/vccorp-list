import React from "react"
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
            <th>NHÀ SẢN XUẤT</th>
            {width > 576 && (
              <>
                <th width='200'>NHÃN</th>
                <th width='200'>LOẠI</th>
              </>
            )}
            <th width='100'></th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => <Item key={user?.id} user={user} />)}
        </tbody>
      </table>
    </>
  )
}

export default List
