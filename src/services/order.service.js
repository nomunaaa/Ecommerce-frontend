import { get, post, del, put, patch } from "../helpers/api_helper"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

export async function createOrder(body) {
  try {
    const result = await post("/order/add", body)
    console.log(result)
    toastr.success(result.message)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function updateStatusOnWay(orderId) {
  try {
    const result = await patch(`/order/statusOnWay?orderId=${orderId}`)
    console.log(result)
    toastr.success(result.message)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function updateStatusReceived(orderId) {
  try {
    const result = await patch(`/order/statusReceived?orderId=${orderId}`)
    console.log(result)
    toastr.success(result.message)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function listOrders(email) {
  try {
    const result = await get(`/order/list?email=${email}`)
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function highestEarn(email) {
  try {
    const result = await get(`/order/highestEarn?email=${email}`)
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function listOrdersSeller(email) {
  try {
    const result = await get(`/order/listSellerOrders?email=${email}`)
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function listDatas(email) {
  try {
    const result = await get(`/order/data?email=${email}`)
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default {
  createOrder,
  listOrders,
  listOrdersSeller,
  highestEarn,
  listDatas,
}
