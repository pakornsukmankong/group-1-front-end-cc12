import axios from '../config/axios';

export const getCategoryList = () => axios.get('/category/list');
export const getFacilityList = () => axios.get('/facility/list');
export const getPropertyTypeList = () => axios.get('/property-type/list');
export const getHostPreview = (id) => axios.get(`/host/preview?id=${id}}`);

export const createHostPropertyType = (input) =>
  axios.post('/host/create/property-type', input);

export const updateHostCategory = (input) =>
  axios.patch('/host/update/category', input);

export const updateHostLocation = (input) =>
  axios.patch('/host/update/location', input);

export const updateHostFloorPlan = (input) =>
  axios.patch('/host/update/floor-plan', input);

export const updateHostFacility = (input) =>
  axios.patch('/host/update/facility', input);

export const updateHostPhoto = (input) =>
  axios.patch('/host/update/photo', input);

export const updateHostTitle = (input) =>
  axios.patch('/host/update/title', input);

export const updateHostDescription = (input) =>
  axios.patch('/host/update/description', input);

export const updateHostPrice = (input) =>
  axios.patch('/host/update/price', input);

export const updateHostSavePreview = (input) =>
  axios.patch('/host/update/preview', input);
