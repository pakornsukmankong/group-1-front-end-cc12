import { createContext, useContext, useState, useEffect } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import * as propertyService from '../api/propertyApi';

const PropertyContext = createContext();

function PropertyContextProvider({ children }) {
  const [property, setProperty] = useState(null);
  const [wishList, setWishList] = useState(null);
  const [room, setRoom] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchProperty = async () => {
    try {
      let res;
      if (searchParams.get('id') || searchParams.get('search')) {
        const param = Object.fromEntries([...searchParams]);
        const queryParam = createSearchParams(param).toString();
        res = await propertyService.getPropertyByCategory(queryParam);
      } else {
        res = await propertyService.getAllProperty();
      }
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

  const clearParams = () => {
    searchParams.delete('id');
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const resetProperty = async () => {
    clearParams();
    await fetchProperty();
  };

  const fetchPropertyByCategory = async (queryParam) => {
    try {
      let res = await propertyService.getPropertyByCategory(queryParam);
      setProperty(res.data.property);
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
        setProperty,
        toggleWishList,
        wishList,
        fetchWishList,
        fetchRoomFromID,
        resetProperty,
        fetchPropertyByCategory,
        room
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
