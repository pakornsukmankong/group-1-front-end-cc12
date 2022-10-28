import axios from '../config/axios';

export const sendOtp = (phoneNumber) =>
  axios.post('/auth/sendotp', { phoneNumber });

export const verifyOtp = (phoneNumber, code) =>
  axios.post('/auth/verify', { phoneNumber: phoneNumber, code: code });

export const getUserByPhoneNumber = (phoneNumber) =>
  axios.post('/auth/getuserbyphone', phoneNumber);
export const register = (input) => axios.post('/auth/register', input);
export const loginWithEmail = (input) =>
  axios.post('/auth/loginwithemail', input);

export const getMe = () => axios.get('/auth/me');

export const updateUser = (data) => axios.patch('/auth/updateprofile', data);
export const deleteUser = () => axios.delete('/auth/deleteuser');
