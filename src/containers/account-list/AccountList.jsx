import React, { useState, useEffect, useCallback } from "react"
import Filter from "../../components/filter/Filter"
import Pagination from "../../components/pagination/Pagination"
import List from "../../components/list/List"
import "./AccountList.scss"
import { authFetch } from "../../shared/authFetch"
import Search from "../../components/search/Search"
import { CircularProgress } from "@material-ui/core"
import { useLocation, useHistory } from "react-router-dom"
// import { useToasts } from "react-toast-notifications"
import { withRouter } from "react-router"

const AccountList = ({ location }) => {
  let history = useHistory()
  let query = new URLSearchParams(useLocation().search)

  const pramKey = query.get("keyword")
  const pramLabel = query.get("label")
  const pramStatus = query.get("status")

  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [label, setLabel] = useState(pramLabel || "")
  const [status, setStatus] = useState(pramStatus || "")
  const [keyword, setKey] = useState(pramKey || "")
  const [isLoading, setIsLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [pageSize, setPageSize] = useState(30)
  const [isDisableNext, setIsDisableNext] = useState(false)
  const [maxPage, setMaxPage] = useState(0)
  // const { addToast } = useToasts()

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleFetchUsers = useCallback(async () => {
    setIsLoading(true)

    query.set("keyword", keyword)
    query.set("label", label)
    query.set("status", status)
    history.push({
      search: query.toString(),
    })

    try {
      const { data } = await authFetch.get(
        `social/api/system/list_page_manager?PageIndex=${currentPage}&PageSize=${pageSize}&class=${label}&status=${status}&Keyword=${keyword}`
      )
      if (data) {
        setIsLoading(false)
        setUsers(data.data?.data)
        setTotalPage(data.data.total)

        // addToast("Successfully", {
        //   appearance: "success",
        //   autoDismiss: true,
        // })
      }
    } catch (error) {
      // addToast("Error", { appearance: "error", autoDismiss: true })
      console.log(error)
    }
  }, [currentPage, keyword, label, status])

  useEffect(() => {
    handleFetchUsers()
  }, [handleFetchUsers])

  useEffect(() => {
    setStatus(query.get("status"))
    setKey(query.get("keyword"))
    setLabel(query.get("label"))
  }, [location])

  useEffect(() => {
    const n = Math.round(totalPage / pageSize)
    if (totalPage % pageSize === 0) setMaxPage(n)
    if (totalPage % pageSize !== 0) setMaxPage(n + 1)
    if (currentPage * pageSize >= totalPage) {
      return setIsDisableNext(true)
    }
    return setIsDisableNext(false)
  }, [totalPage, currentPage, pageSize])

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
          setCurrentPage={setCurrentPage}
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
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className='pagination-container'>
        {users && (
          <Pagination
            currentPage={currentPage}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            onSetPage={(number) => setCurrentPage(number)}
            isDisableNext={isDisableNext}
            maxPage={maxPage}
            users={users}
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

export default withRouter(AccountList)
