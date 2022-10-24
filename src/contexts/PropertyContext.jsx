import { createContext, useContext, useState, useEffect } from 'react';
import * as propertyService from '../api/propertyApi';

const PropertyContext = createContext();

function PropertyContextProvider({ children }) {
	const [property, setProperty] = useState(null);

	useEffect(() => {
		const fetchProperty = async () => {
			try {
				const res = await propertyService.getAllProperty();
				// console.log(res.data.post);
				setProperty(res.data.property);
			} catch (err) {
				console.log(err);
			}
		};
		fetchProperty();
	}, []);

	return (
		<PropertyContext.Provider value={{ property }}>
			{children}
		</PropertyContext.Provider>
	);
}

export const useProperty = () => {
	return useContext(PropertyContext);
};

export default PropertyContextProvider;
