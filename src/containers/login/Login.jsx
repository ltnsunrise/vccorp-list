import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({}) => {
  let history = useHistory()
  const [mobile, setMobile] = useState("")

  async function handleSubmit(e) {
    localStorage.setItem("mobile", mobile)

    e.preventDefault()

    let formData = new FormData()

    formData.set("mobile", mobile)
    try {
      const res = await axios.post(
        "https://b11.cnnd.vn/g/api/user/send-sms-otp",
        formData
      )
      localStorage.setItem("token", res?.data?.data?.access_token)
      history.push("/otp")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type='submit'>Đăng nhập</button>
      </form>
    </div>
  )
}

export default Login
