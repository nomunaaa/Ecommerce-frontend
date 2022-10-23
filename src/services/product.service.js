import { get, post, del, put, patch } from "../helpers/api_helper"
import toastr from "toastr"
import "toastr/build/toastr.min.css"

export async function createProduct(body) {
  try {
    const result = await post("/product/add", body)
    console.log(result)
    toastr.success("Succesful")
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function listProducts() {
  try {
    const result = await get("/product/list")
    console.log(result.data)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default {
  createProduct,
  listProducts,
}
