import axios from "axios";

const instance = axios.create({
  baseURL: 'https://62e894c693938a545be7e19b.mockapi.io/kdAPI/TodoItems/'
})

export default instance;