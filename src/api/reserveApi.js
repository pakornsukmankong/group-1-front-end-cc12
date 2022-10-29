import axios from '../config/axios';

export const getReserveRoom = (reserveId) =>
  axios.get(`/rooms/${reserveId}/cardProperty`);

export const createReserveRoom = (id, input) =>
  axios.post(`/rooms/${id}/reserve`, input);

export const getStatusBookingByPropertyId = (propertyId) =>
  axios.get(`/rooms/${propertyId}`);
