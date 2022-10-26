import axios from '../config/axios';

export const getReserveRoom = () =>
	axios.get('/rooms/:propertyId/cardProperty');

export const createReserveRoom = (id, input) =>
	axios.post(`/rooms/${id}/reserve`, input);
