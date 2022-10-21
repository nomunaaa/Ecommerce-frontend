import { isPropsEqual } from "@fullcalendar/core"
import axios from "axios"
import accessToken from "helpers/jwt-token-access/accessToken"
import toastr from "toastr"
import "toastr/build/toastr.css"
const login = async function (email, password) {
  try {
    let response = await axios({
      url: "http://localhost:4000/auth/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
    if (response.status == 200) {
      toastr.success("Successful Login")
      localStorage.setItem(response.data.accessToken)
      //   window.location.href = "/dashboard"
    }
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}
const register = async function (email, password, userStatus) {
  try {
    let response = await axios({
      url: "http://localhost:4000/auth/register",
      method: "POST",
      data: {
        email,
        password,
        userStatus,
      },
    })
    if (response.status == 200) {
      toastr.success("Successful")
    }
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}
const verify = async function (email, otp) {
  try {
    let response = await axios({
      url: "http://localhost:4000/auth/verify",
      method: "POST",
      data: {
        email,
        otp,
      },
    })
    if (response.status == 200) {
      toastr.success("Successful")
      window.location.href = "/login"
    }
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

const logout = async function () {
  try {
    await localStorage.removeItem("access_token")
    await updateAccessToken(null)
    return
  } catch (err) {
    console.log(err)
  }
}

export const authService = {
  login,
  logout,
  register,
  verify,
}
