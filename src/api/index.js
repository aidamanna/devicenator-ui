import axios from 'axios'

const url = '//api.devicenator.com/'

export const listDevices = () => {
  return axios.get(url + 'devices', {
    headers: { Authorization: getAuthorizationHeader() }
  })
}

export const getDevice = async (imei) => {
  return axios.get(url + 'devices/' + imei, {
    headers: { Authorization: getAuthorizationHeader() }
  })
}

export const addDevice = (device) => {
  return axios.post(url + 'devices',
    JSON.stringify(device), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuthorizationHeader()
      }
    })
}

export const updateDevice = (imei, device) => {
  return axios.put(url + 'devices/' + imei,
    JSON.stringify(device), {
      headers: {
        'Content-Type': 'application/json',
        Authorization: getAuthorizationHeader()
      }
    })
}

export const deleteDevice = (imei) => {
  return axios.delete(url + 'devices/' + imei, {
    headers: { Authorization: getAuthorizationHeader() }
  })
}

export const authenticate = (username, password) => {
  return axios.post(url + 'authenticate',
    { username, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
}

export const saveAuthorizationToken = (token) => {
  localStorage.setItem('token', token)
}

const getAuthorizationHeader = () => {
  return 'Bearer ' + localStorage.getItem('token')
}
