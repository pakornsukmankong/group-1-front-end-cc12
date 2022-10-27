import axios from '../config/axios';

export const createReview = (propertyId, comment) =>
	axios.post(`/review/createreview/${propertyId}`, { comment });

export const getAllPropertyReview = (propertyId) =>
	axios.get(`review/${propertyId}`);
