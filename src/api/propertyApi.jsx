import axios from '../config/axios';

export const getAllProperty = () => axios.get('/property/');
