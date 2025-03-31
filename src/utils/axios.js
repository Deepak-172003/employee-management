
import axios from 'axios'

const BASE_URL = 'https://reqres.in'


const API = axios.create({
  baseURL:BASE_URL,
  headers:{
    'Content-Type':'application/json'
  }
})

export default API
