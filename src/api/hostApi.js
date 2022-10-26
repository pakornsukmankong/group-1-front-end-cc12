import axios from '../config/axios';

export const getCategoryList = () => axios.get('/category/list');
export const getFacilityList = () => axios.get('/facility/list');
export const getPropertyTypeList = () => axios.get('/property-type/list');

export const createHostPropertyType = (input) =>
  axios.post('/host/create/property-type', input);

export const updateHostCategory = (input) =>
  axios.patch('/host/update/category', input);
