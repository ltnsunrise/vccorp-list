import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/Filter"
import Pagination from "../../components/pagination/Pagination"
import List from "../../components/list/List"
import "./AccountList.scss"
import { authFetch } from "../../shared/authFetch"
import Search from "../../components/search/Search"

const AccountList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  let [users, setUsers] = useState([])
  const [label, setLabel] = useState("")
  const [status, setStatus] = useState("")
  const [keyword, setKey] = useState("")

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    getUsers()
  }, [currentPage, keyword, label, status])

  async function getUsers() {
    try {
      const { data } = await authFetch.get(
        `social/api/system/list_page_manager?PageIndex=${currentPage}&PageSize=30&class=${label}&status=${status}&Keyword=${keyword}`
      )
      setUsers(data?.data?.data)

      return () => setUsers([])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='account-list'>
      <div className='search-container'>
        <Search
          label={label}
          keyword={keyword}
          status={status}
          setLabel={(e) => setLabel(e)}
          setKey={(e) => setKey(e)}
          setStatus={(e) => setStatus(e)}
        />
      </div>
      <div className='filter-container'>
        <Filter
          label={label}
          keyword={keyword}
          status={status}
          setLabel={(e) => setLabel(e)}
          setKey={(e) => setKey(e)}
          setStatus={(e) => setStatus(e)}
        />
      </div>
      <div className='pagination-container'>
        <Pagination
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
      <div className='list-container'>
        <List users={users} />
      </div>
    </div>
  )
}

export default AccountList
