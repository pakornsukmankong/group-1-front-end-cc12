import axios from '../config/axios';

export const payment = (input) => axios.post('/payment',input)