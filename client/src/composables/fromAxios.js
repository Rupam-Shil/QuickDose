import axios from 'axios';

export const sendDataPost = async (uri, details) => {
	const res = await axios.post(uri, details);
	const data = res.data;
	return data;
};

export const receiveDataGet = async (uri) => {
	const res = await axios.get(uri);
	const data = res.data;
	return data;
};
