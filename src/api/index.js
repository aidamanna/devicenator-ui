export const listDevices = async () => {
  const devices = await fetch('http://35.223.227.103:8080/devices')
  return devices.json()
}
