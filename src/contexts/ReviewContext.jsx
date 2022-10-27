import { createContext, useCallback, useContext, useState } from 'react';
import * as reviewService from '../api/reviewApi';

const ReviewContext = createContext();

function ReviewContextProvider({ children }) {
	const [review, setReview] = useState([]);

	const getAllPropertyReview = async (propertyId) => {
		const res = await reviewService.getAllPropertyReview(propertyId);
		// console.log(res.data.review);
		setReview(res.data.review);
	};

	const createReview = async (propertyId, comment) => {
		const res = await reviewService.createReview(propertyId, comment);
		// console.log(res.data);
	};

	return (
		<ReviewContext.Provider
			value={{ createReview, getAllPropertyReview, review }}
		>
			{children}
		</ReviewContext.Provider>
	);
}

export const useReview = () => {
	return useContext(ReviewContext);
};

export default ReviewContextProvider;
