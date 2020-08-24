import Axios from "axios"

const authFetch = Axios.create({
  baseURL: "http://b11.cnnd.vn/",
  headers: { Authorization: `${localStorage.getItem("token")}` },
})

export { authFetch }
