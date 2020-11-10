import axios from 'axios'

const preUrl = 'https://main-fastapi.herokuapp.com'

export default {
  fetchAuthGet: (url) => axios.get(`${preUrl}${url}`, {
    headers: {
    'accept': 'application/json'
    }
  }),
  fetchPost: (url, data) => axios.post(`${preUrl}${url}`, data, {
    headers: {
    }
  }),
  fetchPut: (url, data) => axios.put(`${preUrl}${url}`, data, {
    headers: {
    }
  }),
  fetchAuthDelete: (url, data) => axios.delete(`${preUrl}${url}`, data, {
    headers: {
    }
  }),
}
