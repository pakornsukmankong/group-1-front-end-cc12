import { GoogleMap, Marker } from '@react-google-maps/api'

function Map({ room }) {
  const center = { lat: +room?.latitude, lng: +room?.longitude }

  return (
    <div className="flex">
      <GoogleMap
        zoom={16}
        center={center}
        mapContainerClassName="w-screen h-[20rem]">
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default Map
