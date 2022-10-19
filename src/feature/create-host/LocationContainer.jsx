import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';

function LocationContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCjS_58fk-DKUFw0nSQyeHpy1myF5HCy4o'
  });
  const center = { lat: 13.7450396, lng: 100.5185096 };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            Where's your place located?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 flex flex-col justify-between items-stretch ">
        <TopMenu
          isTransparent={true}
          bgButton={'bg-black'}
          textColor={'text-slate-300'}
        />
        {/* <div className="px-32 pb-10">
          <input
            type="text"
            defaultValue="Enter your address"
            placeholder="Enter your address"
            className="pl-5 text-xl min-w-full min-h-full rounded-xl text-gray-700 bg-white  "
          />
        </div> */}
        {isLoaded ? (
          <GoogleMap
            zoom={16}
            center={center}
            mapContainerClassName="h-full w-full "
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
        <BottomMenu
          back={'/create-host/privacy-type/123'}
          next={'/create-host/floor-plan/123'}
        />
      </div>
    </div>
  );
}
export default LocationContainer;
