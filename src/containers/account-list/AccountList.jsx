import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/Filter"
import Pagination from "../../components/pagination/Pagination"
import List from "../../components/list/List"
import "./AccountList.scss"
import { authFetch } from "../../shared/authFetch"
import Search from "../../components/search/Search"
import { CircularProgress } from "@material-ui/core"
import { useLocation, useHistory } from "react-router-dom"

const AccountList = () => {
  let history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)
  let [users, setUsers] = useState([])
  const [label, setLabel] = useState("")
  const [status, setStatus] = useState("")
  const [keyword, setKey] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  let query = new URLSearchParams(useLocation().search)

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {}, [query])

  useEffect(() => {
    history.push({
      search: `?${keyword && `keyword=${keyword}`}${
        label && `&label=${label}`
      }${status && `&status=${status}`}`,
    })
    getUsers()
  }, [currentPage, keyword, label, status])

  async function getUsers() {
    setIsLoading(true)
    try {
      const { data } = await authFetch.get(
        `social/api/system/list_page_manager?PageIndex=${currentPage}&PageSize=30&class=${label}&status=${status}&Keyword=${keyword}`
      )
      if (data) {
        setIsLoading(false)
        setUsers(data.data?.data)
      }
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
        {users?.length && (
          <Pagination
            currentPage={currentPage}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            onSetPage={(number) => setCurrentPage(number)}
          />
        )}
      </div>
      <div className='list-container'>
        {isLoading ? (
          <div align='center'>
            <CircularProgress />
          </div>
        ) : (
          <List users={users} />
        )}
      </div>
    </div>
  )
}

export default AccountList
