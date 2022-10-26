import axios from '../config/axios';

export const getUserBooking = () => axios.get('/booking/getuserbooking');
