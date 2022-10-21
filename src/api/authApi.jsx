import axios from '../config/axios'

export const sendOtp = (phoneNumber) =>
  axios.post('/auth/sendotp', { phoneNumber })

export const verifyOtp = (phoneNumber, code) =>
  axios.post('/auth/verify', { phoneNumber: phoneNumber, code: code })

export const getUserByPhoneNumber = (phoneNumber) =>
  axios.post('/auth/getuserbyphone', phoneNumber)
export const register = (input) => axios.post('/auth/register', input)
export const login = (input) => axios.post('/auth/login', input)

export const getMe = () => axios.get('/auth/me')
