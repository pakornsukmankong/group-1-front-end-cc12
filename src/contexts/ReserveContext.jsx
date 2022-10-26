import { createContext, useContext, useEffect, useState } from 'react';
import dateFormat from 'dateformat';
const ReserveContext = createContext();

function ReserveContextProvider({ children }) {
	const today = dateFormat(new Date(), 'yyyy-mm-dd');
	let getTomorrow = new Date();
	getTomorrow.setDate(getTomorrow.getDate() + 1);
	const tomorrow = dateFormat(getTomorrow, 'yyyy-mm-dd');

	const [checkInDate, setCheckInDate] = useState(today);
	const [checkOutDate, setCheckOutDate] = useState(tomorrow);
	const [adults, setAdults] = useState(1);
	const [child, setChild] = useState(0);
	const [totalGuest, setTotalGuest] = useState(0);

	useEffect(() => {
		setTotalGuest(adults + child);
	}, [adults, child]);

	const handleIncreseAdults = () => {
		setAdults((prev) => prev + 1);
		setTotalGuest(adults + child);
	};

	const handleDeceaseAdults = () => {
		if (adults > 1) {
			setAdults((prev) => prev - 1);
			setTotalGuest(adults + child);
		}
	};

	const handleIncreseChild = () => {
		setChild((prev) => prev + 1);
		setTotalGuest(adults + child);
	};

	const handleDeceaseChild = () => {
		if (child > 0) {
			setChild((prev) => prev - 1);
			setTotalGuest(adults + child);
		}
	};

	const handleCheckInDate = (input) => {
		setCheckInDate(input);
	};

	const handleCheckOutDate = (input) => {
		setCheckOutDate(input);
	};

	const formatPrice = (price) => {
		return price?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	};

	return (
		<ReserveContext.Provider
			value={{
				formatPrice,
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
				today,
				tomorrow,
				totalGuest,
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
