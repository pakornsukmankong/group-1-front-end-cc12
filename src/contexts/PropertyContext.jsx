import { createContext, useContext, useState, useEffect } from 'react';
import * as propertyService from '../api/propertyApi';

const PropertyContext = createContext();

function PropertyContextProvider({ children }) {
	const [property, setProperty] = useState(null);
	const [wishList, setWishList] = useState(null);
	const [room, setRoom] = useState(null);

	const fetchProperty = async () => {
		try {
			const res = await propertyService.getAllProperty();
			// console.log(res.data.property);
			setProperty(res.data.property);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchRoomFromID = async (id) => {
		try {
			const res = await propertyService.getPropertyByRoom(id);

			// console.log(res.data.property);
			setRoom(res.data.property);
		} catch (err) {
			console.log('Fetch fetchUserCourse Error');
		}
	};

	const fetchWishList = async () => {
		try {
			const res = await propertyService.getUserWishList();
			// console.log(res.data.findWishListByUser);
			setWishList(res.data.findWishListByUser);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchProperty();
		fetchWishList();
	}, []);

	const toggleWishList = async (propertyId) => {
		const res = await propertyService.toggleWishList(propertyId);
		await fetchWishList();
	};

	return (
		<PropertyContext.Provider
			value={{
				property,
				toggleWishList,
				wishList,
				fetchWishList,
				fetchRoomFromID,
				room,
			}}
		>
			{children}
		</PropertyContext.Provider>
	);
}

export const useProperty = () => {
	return useContext(PropertyContext);
};

export default PropertyContextProvider;
