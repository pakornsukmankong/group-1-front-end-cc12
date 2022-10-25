import { GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import debounce from 'lodash.debounce'
import { useEffect, useMemo, useRef, useState } from 'react'

function BecomeHostGoogleMap() {
  const center = { lat: 43.45, lng: -80.49 }
  const [marker, setMarker] = useState(null)

  return (
    <>
      <div>
        <PlaceAutoComplete setMarker={setMarker} />
      </div>

      <GoogleMap
        zoom={10}
        center={marker || center}
        mapContainerClassName="h-[25rem] z-[3]">
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </>
  )
}

export default BecomeHostGoogleMap

function PlaceAutoComplete({ setMarker }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const searchRef = useRef(null)

  const onSearch = () => {
    setValue(searchRef.current.value)
  }

  const onSelect = async ({ description }) => {
    setValue(description, false)
    searchRef.current.value = description
    clearSuggestions()

    const results = await getGeocode({ address: description })
    const { lat, lng } = await getLatLng(results[0])
    setMarker({ lat, lng })
  }

  const onClear = () => {
    setValue(null)
    searchRef.current.value = null
    clearSuggestions()
  }

  const debouncedResults = useMemo(() => {
    return debounce(onSearch, 1000)
  }, [value])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  }, [])

  return (
    <>
      <div className="absolute z-[10]">
        <label className="absolute top-[6rem] left-[9rem] md:left-[27rem] flex">
          <i className="fa-solid fa-location-dot text-[1.3rem]"></i>
        </label>
        <input
          ref={searchRef}
          onChange={debouncedResults}
          disabled={!ready}
          className="bg-white w-[80vh] mt-20 ml-28 md:ml-[25rem] text-[1rem] text-gray-700 font-bold rounded-full py-3 pl-20 pr-14 shadow-lg placeholder:not-italic placeholder:text-[1rem] placeholder:font-bold placeholder:text-slate-500 focus:outline-black focus:border-black focus:ring-black focus:rounded-xl"
          placeholder="Search an address"
        />
        <label
          onClick={onClear}
          htmlFor="search"
          className="absolute top-[6rem] right-7 flex items-center cursor-pointer">
          <i className="fa-solid fa-circle-xmark text-[1.2rem] text-gray-500"></i>
        </label>
        <div className="rounded-b-2xl shadow-lg top-[-1rem] z-[10] ml-[7.5rem] md:ml-[25rem]">
          <ul
            className={`${
              value ? '' : 'hidden'
            } max-h-72 overflow-y-scroll cursor-pointer bg-white`}>
            <RenderLocationList
              status={status}
              data={data}
              onSelect={onSelect}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

function RenderLocationList({ status, data, onSelect }) {
  return data.map((item, keys) => {
    return (
      <li
        onClick={() => onSelect(item)}
        key={keys}
        className="flex flex-row items-center font-light py-2 hover:bg-gray-300">
        <div className="mx-5 bg-gray-200 py-[.8rem] px-[1.2rem] rounded-full">
          <i className="fa-solid fa-building text-[1rem]"></i>
        </div>
        <div className="mr-10">
          <p className="text-[1rem]">
            {item?.structured_formatting?.main_text}
          </p>
          <p className="text-[.8rem]">
            {item?.structured_formatting?.secondary_text}
          </p>
        </div>
      </li>
    )
  })
}
