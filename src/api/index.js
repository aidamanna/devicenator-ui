const url = 'http://localhost:8080/'

export const listDevices = async () => {
  const devices = await fetch(url + 'devices', {
    headers: { Authorization: 'Basic ' + window.btoa('aida:none') }
  })
  return devices.json()
}

export const getDevice = async (imei) => {
  const device = await fetch(url + 'devices/' + imei, {
    headers: { Authorization: 'Basic ' + window.btoa('aida:none') }
  })
  return device.json()
}

export const addDevice = async (device) => {
  await fetch(url + 'devices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + window.btoa('aida:none')
    },
    body: JSON.stringify(device)
  })
}

export const updateDevice = async (imei, device) => {
  await fetch(url + 'devices/' + imei, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + window.btoa('aida:none')
    },
    body: JSON.stringify(device)
  })
}

export const deleteDevice = async (imei) => {
  await fetch(url + 'devices/' + imei, {
    method: 'DELETE',
    headers: { Authorization: 'Basic ' + window.btoa('aida:none') }
  })
}

export const logIn = (user, password) => {
  return new Promise((resolve, reject) => {
    fetch(url + 'login', { headers: { Authorization: 'Basic ' + window.btoa(user + ':' + password) } })
      .then(response => {
        if (response.status !== 200) {
          return reject(response.status)
        }
        return resolve()
      })
  })
}
