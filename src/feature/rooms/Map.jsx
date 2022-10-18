import { GoogleMap, Marker } from '@react-google-maps/api'

function Map() {
  const center = { lat: 44, lng: -80 }

  return (
    <div className="flex">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-screen h-[20rem]">
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default Map
