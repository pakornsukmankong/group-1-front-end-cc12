import { useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';

import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

import './create-host.css';
import { getHostCreateId } from '../../utils/localStorage';
import { updateHostLocation } from '../../api/hostApi';
import { useNavigate } from 'react-router-dom';

function LocationContainer() {
  const apiKey = 'AIzaSyCjS_58fk-DKUFw0nSQyeHpy1myF5HCy4o';

  let navigate = useNavigate();

  const searchRef = useRef(null);
  const [active, setActive] = useState(false);
  const [hostId, setHostId] = useState(getHostCreateId());

  const center = {
    lat: 13.745250365252438,
    lng: 100.52355503936467
  };

  const [maker, setMaker] = useState();
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const [locationList, setLocationList] = useState();

  const [locationLoading, setLocationLoading] = useState();
  const libraries = ['places'];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries
  });

  const onInteractive = async (event) => {
    const value = event.target.value;
    setActive(value ? true : false);
  };

  const onSearch = () => {
    setLocationLoading(true);
    const value = searchRef.current.value;
    if (value) {
      let request = {
        location: center,
        radius: '100',
        query: value
      };
      const service = new google.maps.places.PlacesService(map);
      service.textSearch(request, mapDataLocation);
    }
    setActive(value ? true : false);
  };

  const mapDataLocation = (results, status) => {
    let locationList = [];
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        locationList.push({
          name: results[i].name,
          address: results[i].formatted_address,
          location: {
            lat: results[i].geometry.location.lat(),
            lng: results[i].geometry.location.lng()
          }
        });
      }
    }
    setLocationLoading(false);
    setLocationList(locationList);
  };

  const onSelect = (select) => {
    setMaker({ ...select });
    setActive(false);
    searchRef.current.value = select.name;
  };

  const onClear = () => {
    searchRef.current.value = '';
    searchRef.current.focus();
    setMaker(null);
    setActive(false);
    setLocationList(null);
  };

  const onExitSelect = () => {
    setMaker(null);
    setActive(true);
    setLocationList(null);
  };

  const debouncedResults = useMemo(() => {
    return debounce(onSearch, 1000);
  }, [map]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  const onNext = async (maker) => {
    try {
      const input = {
        propertyId: hostId,
        address: maker?.address,
        latitude: maker?.location.lat.toString(),
        longitude: maker?.location.lng.toString()
      };
      const res = await updateHostLocation(input);
      if (res.status === 201) {
        navigate(`/create-host/floor-plan/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            Where's your place located?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 flex flex-col justify-between items-stretch relative">
        <TopMenu
          isTransparent={true}
          bgButton={'bg-black'}
          textColor={'text-slate-300'}
        />
        <div
          className={`absolute ${
            active ? 'input-active' : ''
          } top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]`}
        >
          {maker ? (
            <label className="relative flex flex-col justify-center z-[2]">
              <span className="absolute inset-y-0 left-7 flex items-center pl-2">
                <i className="fa-solid fa-location-dot text-[1.3rem]"></i>
              </span>
              <div
                type="text"
                name="search"
                className="search-input block bg-white w-[40vw] text-[0.9rem] text-gray-700 font-bold rounded-full py-5 pl-20 pr-14 shadow-lg placeholder:not-italic placeholder:text-[1rem] placeholder:font-bold placeholder:text-slate-500 focus:outline-black focus:border-black focus:ring-black focus:rounded-xl"
                placeholder="Enter your address"
              >
                {maker?.address}
              </div>
              <label
                htmlFor="search"
                onClick={onExitSelect}
                className="absolute inset-y-0 right-7 flex items-center cursor-pointer"
              >
                <i className="fa-solid fa-circle-xmark text-[1.2rem] text-gray-500"></i>
              </label>
            </label>
          ) : (
            <label className="relative flex flex-col justify-center z-[2]">
              <span className="absolute inset-y-0 left-7 flex items-center pl-2">
                <i className="fa-solid fa-location-dot text-[1.3rem]"></i>
              </span>
              <input
                id="search"
                ref={searchRef}
                type="text"
                name="search"
                onClick={onInteractive}
                onBlur={onInteractive}
                onChange={debouncedResults}
                className="search-input block bg-white w-[40vw] text-[1rem] text-gray-700 font-bold rounded-full py-5 pl-20 pr-14 shadow-lg placeholder:not-italic placeholder:text-[1rem] placeholder:font-bold placeholder:text-slate-500 focus:outline-black focus:border-black focus:ring-black focus:rounded-xl"
                placeholder="Enter your address"
              />
              <label
                htmlFor="search"
                onClick={onClear}
                className="absolute inset-y-0 right-7 flex items-center cursor-pointer"
              >
                <i className="fa-solid fa-circle-xmark text-[1.2rem] text-gray-500"></i>
              </label>
            </label>
          )}
          <div className="box-list overflow-hidden rounded-b-2xl shadow-lg relative top-[-1rem] z-[1]">
            <ul className="search-list list-none bg-white pt-5 max-h-72 pb-5 overflow-y-scroll cursor-pointer">
              <RenderLocationList
                isLoading={locationLoading}
                locationList={locationList}
                onSelect={onSelect}
              />
            </ul>
          </div>
        </div>
        {isLoaded ? (
          <GoogleMap
            zoom={16}
            mapContainerClassName="h-full w-full z-[3]"
            center={maker ? maker.location : center}
            onLoad={(map) => setMap(map)}
            options={{
              zoomControl: true,
              gestureHandling: 'greedy'
            }}
          >
            {maker ? <Marker position={maker.location} /> : null}
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
        <BottomMenu
          back={`/create-host/category-type/${hostId}`}
          disableNext={maker ? false : true}
          onNext={() => onNext(maker)}
        />
      </div>
    </div>
  );
}

function RenderLocationList({ isLoading, locationList, onSelect }) {
  if (!locationList && !isLoading) return;
  if (isLoading) {
    return (
      <li className="flex flex-row items-center  font-light py-2">
        <div className="mt-5 text-center w-full">
          <p className="animate-bounce">Loading...</p>
        </div>
      </li>
    );
  }

  if (locationList?.length === 0) {
    return (
      <li className="flex flex-row items-center  font-light py-2">
        <div className="mt-5 text-center w-full">
          <p>Cannot Location</p>
        </div>
      </li>
    );
  }

  return locationList.map((item, keys) => {
    return (
      <li
        onClick={() => onSelect(item)}
        key={keys}
        className="flex flex-row items-center  font-light py-2 hover:bg-gray-300"
      >
        <div className="mx-5 bg-gray-200 py-[.8rem] px-[1.2rem] rounded-full">
          <i className="fa-solid fa-building text-[1rem]"></i>
        </div>
        <div className="mr-10">
          <p className="text-[1rem]">{item.name}</p>
          <p className="text-[.8rem]">{item.address}</p>
        </div>
      </li>
    );
  });
}

export default LocationContainer;
