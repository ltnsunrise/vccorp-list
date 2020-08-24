import React, { useState } from "react"
import Axios from "axios"
import { useHistory } from "react-router-dom"

const Otp = () => {
  let history = useHistory()
  const [otp, setOtp] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    let formData = new FormData()

    formData.set("mobile", localStorage.getItem("mobile"))
    formData.set("otp", otp)
    try {
      const res1 = await Axios.post(
        "http://b11.cnnd.vn/g/api/user/confirm-sms-otp",
        formData,
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      )
      const res = await Axios.get(
        "http://b11.cnnd.vn/g/api/user/get-api-token",

        {
          headers: { Authorization: `${res1?.data?.data?.access_token}` },
        }
      )

      localStorage.setItem("token", res?.data?.data?.access_token)
      history.push("/users")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type='submit'>Tiếp tục</button>
      </form>
    </div>
  )
}

export default Otp
