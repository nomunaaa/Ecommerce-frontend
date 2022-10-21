import { get, post, del, put, patch } from "../helpers/api_helper"
import toastr from "toastr"
import "toastr/build/toastr.min.css"
export async function getPos() {
  try {
    const result = await get("/v1/options/cash_vendor/")
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function createBatch(batchData) {
  try {
    const result = await post("/v1/shop/batch/", batchData)
    console.log(result.data)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function updateBranch(merchant_id, branch_id, branchData) {
  try {
    const result = await patch(
      `/v1/merchant/${merchant_id}/branch/${branch_id}`,
      branchData
    )
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function updatePos(merchant_id, branch_id, pos_id, branchData) {
  try {
    const result = await patch(
      `/v1/merchant/${merchant_id}/branch/${branch_id}/pos/${pos_id}`,
      branchData
    )
    console.log(result.data)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function updateMerchant(merchant_id, merchantData) {
  try {
    const result = await patch(`/v1/merchant/${merchant_id}`, merchantData)
    console.log(result.data)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function createPos(merchant_id, branch_id) {
  try {
    const result = await post(
      `/v1/merchant/${merchant_id}/branch/${branch_id}/pos`
    )
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function uploadFile(file) {
  try {
    const result = await post(`/v1/file/upload`, file)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function createCare(merchant_id, branch_id, careData) {
  try {
    const result = await post(
      `/v1/merchant/${merchant_id}/branch/${branch_id}/addCare`,
      careData
    )
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getPosView(merchant_id, branch_id, pos_id) {
  try {
    const result = await get(
      `/v1/merchant/${merchant_id}/branch/${branch_id}/pos/${pos_id}`
    )
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function getReport(data) {
  try {
    const result = await post(`/v1/qrs/report`, data)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function getAddress() {
  try {
    const result = await get(`/v1/options/address/cascade`)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function getLog() {
  try {
    const result = await get(`/v1/log`)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
// export  async function createPos(file){
//     try{
//         const result = await post(`/v1/merchant/${merchant_id}/branch/${branch_id}`)
//         return result
//     }catch(err){
//         console.log(err)
//         throw err
//     }
// }
export async function getShop(
  status = "",
  work_status = "",
  pos = "",
  reg_no = ""
) {
  try {
    let url = "/v1/shop?"
    if (status !== "") {
      url += `status=${status}&`
    }
    if (work_status !== "") {
      url += `work_status=${work_status}&`
    }
    if (pos !== "") {
      url += `misc_info.cash_vendor=${pos}&`
    }
    if (reg_no !== "") {
      url += `registration_number=${reg_no}&`
    }

    const result = await get(url.slice(0, -1))
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getWorkStatus() {
  try {
    const result = await get("/v1/options/work_status/")
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
export async function getDashboard(field, pos_company = "") {
  try {
    let url = `/v1/shop/dashboard/${field}`
    if (pos_company !== "") {
      url += `?pos_company=${pos_company}`
    }
    const result = await get(url)
    return result.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function getBranch(merchantId, branchId) {
  try {
    const result = await get(`/v1/merchant/${merchantId}/branch/${branchId}`)
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}

export async function createShop(data) {
  try {
    const result = await post(`/v1/shop`, data)
    // toastr.success("Амжилттай үүслээ")
    return result
  } catch (err) {
    console.log(err, "ereror")
    // toastr.warning(err.message)
    throw err
  }
}

export default {
  getPos,
}
