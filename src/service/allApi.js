import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonStructure";

export const adminLoginApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/admin/login`, body, "")
  }

  //display all registered company details
  export const getAllCompanyApi = async () => {
    return await commonApi('GET', `${BASE_URL}/company/Details`, "", "")
  }

  //display all registerd user details
  export const getAllUserApi = async () => {
    return await commonApi('GET', `${BASE_URL}/user/getDetails`, "", "")
  }