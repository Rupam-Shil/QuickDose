import axios from 'axios';

export const sendDataPost = async (uri, details) => {
	const res = await axios.post(uri, details);
	const data = res.data;
	return data;
};
