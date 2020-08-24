import React, { useState, useEffect } from "react"
import "./List.scss"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Item from "./Item"
import { useCurrentWitdh } from "../../shared/custom-hooks/useCurrentWidth"

const List = ({ users }) => {
  let width = useCurrentWitdh()
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='left'>NHÀ SẢN XUẤT</TableCell>
              {width > 576 && (
                <>
                  <TableCell align='right'>NHÃN</TableCell>
                  <TableCell align='right'>LOẠI</TableCell>
                </>
              )}
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <Item key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default List
