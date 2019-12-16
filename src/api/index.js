export const listDevices = async () => {
	try{
		const devices = await fetch('http://35.223.227.103:8080/devices');
		return devices.json();
	}catch(error){
		throw error;
	}
}
