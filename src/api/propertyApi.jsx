import axios from '../config/axios';

export const getAllProperty = () => axios.get('/property/');

export const getPropertyByRoom = (id) =>
	axios.get(`/property/findproperty/${id}`);

export const getUserWishList = () => axios.get('/property/getwishlist');

export const toggleWishList = (propertyId) =>
	axios.post('/property/togglewishlist', { propertyId });
