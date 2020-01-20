import axios from 'axios'

const url = 'http://localhost:8080/'

export const listDevices = () => {
  return axios.get(url + 'devices')
}

export const getDevice = async (imei) => {
  return axios.get(url + 'devices/' + imei)
}

export const addDevice = (device) => {
  return axios.post(url + 'devices',
    JSON.stringify(device), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

export const updateDevice = (imei, device) => {
  return axios.put(url + 'devices/' + imei,
    JSON.stringify(device), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

export const deleteDevice = (imei) => {
  return axios.delete(url + 'devices/' + imei)
}

export const logIn = (user, password) => {
  return axios.get(url + 'login', {
    headers: { Authorization: 'Basic ' + window.btoa(user + ':' + password) }
  })
}

export const registerLogIn = (user, password) => {
  axios.interceptors.request.use(config => {
    config.headers.authorization = 'Basic ' + window.btoa(user + ':' + password)
    return config
  })
}
