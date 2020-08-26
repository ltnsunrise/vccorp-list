import React from "react"
import "./List.scss"

import Item from "./Item"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const List = ({ users }) => {
  let width = useCurrentWitdh()
  return (
    <div>
      <table className='table'>
        <thead>
          <th>NHÀ SẢN XUẤT</th>
          {width > 576 && (
            <>
              <th>NHÃN</th>
              <th>LOẠI</th>
            </>
          )}
          <th></th>
        </thead>
        <tbody>
          {users && users.map((user) => <Item key={user?.id} user={user} />)}
        </tbody>
      </table>
    </div>
  )
}

export default List
