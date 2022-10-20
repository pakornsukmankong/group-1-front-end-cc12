import axios from '../config/axios';

export const sendOtp = (phoneNumber) =>
	axios.post('/auth/sendotp', { phoneNumber });

export const verifyOtp = (phoneNumber, code) =>
	axios.post('/auth/verify', { phoneNumber: phoneNumber, code: code });

export const register = (data) => axios.post('/auth/register', { data });
