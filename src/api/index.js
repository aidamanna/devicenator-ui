export const listDevices = async () => {
  const devices = await fetch('http://35.223.227.103:8080/devices')
  return devices.json()
}

export const getDevice = async (imei) => {
  const device = await fetch('http://35.223.227.103:8080/devices/' + imei)
  return device.json()
}

export const addDevice = async (imei, vendor, model, operatingSystem, operatingSystemVersion) => {

}
