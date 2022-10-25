import { createContext, useContext, useState } from 'react';

const ReserveContext = createContext();

function ReserveContextProvider({ children }) {
	const [checkInDate, setCheckInDate] = useState(null);
	const [checkOutDate, setCheckOutDate] = useState(null);
	const [adults, setAdults] = useState(null);
	const [child, setChild] = useState(null);

	const handleCheckAdults = (input) => {
		setAdults(input);
	};

	const handleCheckChild = (input) => {
		setChild(input);
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
				handleCheckAdults,
				adults,
				handleCheckChild,
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
