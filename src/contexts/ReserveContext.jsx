import { createContext, useContext, useState } from 'react';

const ReserveContext = createContext();

function ReserveContextProvider({ children }) {
	const [checkInDate, setCheckInDate] = useState(null);
	const [checkOutDate, setCheckOutDate] = useState(null);
	const [adults, setAdults] = useState(0);
	const [child, setChild] = useState(0);

	const handleIncreseAdults = () => {
		setAdults((prev) => prev + 1);
	};

	const handleDeceaseAdults = () => {
		if (adults > 1) {
			setAdults((prev) => prev - 1);
		}
	};

	const handleIncreseChild = () => {
		setChild((prev) => prev + 1);
	};

	const handleDeceaseChild = () => {
		if (child > 1) {
			setChild((prev) => prev - 1);
		}
	};

	const handleCheckInDate = (input) => {
		setCheckInDate(input);
	};

	const handleCheckOutDate = (input) => {
		setCheckOutDate(input);
	};

	return (
		<ReserveContext.Provider
			value={{
				handleCheckInDate,
				handleCheckOutDate,
				checkInDate,
				checkOutDate,
				handleIncreseAdults,
				handleDeceaseAdults,
				handleIncreseChild,
				handleDeceaseChild,
				adults,
				child,
			}}
		>
			{children}
		</ReserveContext.Provider>
	);
}

export const useReserve = () => {
	return useContext(ReserveContext);
};

export default ReserveContextProvider;
