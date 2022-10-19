import axios from '../config/axios';

export const sendOtp = (phoneNumber) =>
	axios.post('/auth/sendotp', { phoneNumber });

// export const verify = ({ phoneNumber, otpNumber }) =>
// 	axios.post('/auth/verify', { phoneNumber, otpNumber });
