import axios from 'axios';
import { API_END_POINT_URL } from './env';
import { getLocalStorage, removeLocalStorage } from '../utils/localStorage';

axios.defaults.baseURL = API_END_POINT_URL;

axios.interceptors.request.use(
	(config) => {
		const token = getLocalStorage();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => Promise.reject(err)
);

// axios.interceptors.response.use(
// 	(response) => {
// 		console.log(response);
// 		return response;
// 	},
// 	(err) => {
// 		console.log(err);
// 		if (err.response.status === '401') {
// 			removeLocalStorage();
// 			return window.location.replace('/');
// 		}
// 	}
// );

export default axios;
