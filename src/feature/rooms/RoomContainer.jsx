import Avatar from '../../components/Avatar'
import Facility from './Facility'
import Highlight from './Highlight'
import Map from './Map'
import { useLoadScript } from '@react-google-maps/api'
import ImageItem from './ImageItem'
import ReserveComponent from '../../components/Modal/ReserveComponent'
import StickyBox from 'react-sticky-box'
import { useParams } from 'react-router-dom'
import { useProperty } from '../../contexts/PropertyContext'
import { useEffect } from 'react'
import Review from './Review'
import ReviewInput from './ReviewInput'
import { useReserve } from '../../contexts/ReserveContext'
import { useReview } from '../../contexts/ReviewContext'
import { useBooking } from '../../contexts/BookingContext'
import { useAuth } from '../../contexts/AuthContext'

function RoomContainer() {

  const { formatMonthYear } = useReserve()
  const { getAllPropertyReview, review } = useReview()
  const { id } = useParams()
  const { fetchRoomFromID, room } = useProperty()
  const { userBooking } = useBooking()
  const { user } = useAuth()

  const facility = room?.PropertyFacilities

  //   console.log(review.userId, 'review')
  //   console.log(userBooking, 'booking')
  //   console.log(user.id, 'user')
  //   console.log(room?.userHostId, 'property')

  useEffect(() => {
    getAllPropertyReview(id)
  }, [])

  useEffect(() => {
    fetchRoomFromID(id)
  }, [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCjS_58fk-DKUFw0nSQyeHpy1myF5HCy4o',
  })

  return (
    <>
      {/* property name ,review, location */}
      <div className="flex flex-col gap-2 py-5 border-b-2">
        <p className="text-3xl">{room?.propertyName}</p>
        <div className="flex gap-2 justify-start items-center font-light">
          <svg viewBox="0 0 32 32" className="block h-[1rem] w-[1rem]">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
          </svg>
          <p>4.68</p>
          <p>
            &middot;{' '}
            {review.length === 0
              ? 'No review'
              : review.length > 1
              ? `${review.length} reviews`
              : `${review.length} review`}
          </p>
          <p>&middot; {room?.address}</p>
        </div>
      </div>

      {/* property Image */}
      <ImageItem room={room} />

      <div className="md:grid md:grid-cols-2">
        <div>
          {/* owner and property info */}
          <div className="flex gap-2 py-5 border-b-2 justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-2xl">
                Entire home hosted by {room?.User?.firstName}{' '}
                {room?.User?.lastName}
              </p>
              <p className="font-light">
                {room?.bedRoomQty} bedrooms &middot; {room?.bedQty} beds
                &middot; {room?.bathRoomQty} baths
              </p>
            </div>
            <Avatar hSize="h-10" wSize="w-10" />
          </div>

          {/* Highlight */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <Highlight />
          </div>

          {/* about this place */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <p className="text-xl">About this place</p>
            <p className="font-light">{room?.description}</p>
          </div>

          {/* What this place offers */}
          <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
            <p className="text-xl my-2">What this place offers</p>
            {facility?.map((item) => (
              <Facility key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="">
          {/* reserve component */}
          <StickyBox>
            <ReserveComponent room={room} />
          </StickyBox>
        </div>
      </div>

      {/* Where you will be */}
      <div className="flex flex-col gap-2 py-5 border-b-2 justify-start">
        <p className="text-xl my-2">Where you'll be</p>
        {isLoaded ? <Map room={room} /> : <div>Loading...</div>}
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-2 py-5 border-b-2 ">
        <div className="text-xl my-2 flex justify-start items-center gap-2">
          {/* <svg viewBox='0 0 32 32' className='block h-[1rem] w-[1rem]'>
						<path d='M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z' />
					</svg> */}

          <p>
            {review.length === 0
              ? 'No review for this room'
              : review.length > 1
              ? `${review.length} reviews`
              : `${review.length} review`}
          </p>
        </div>

        <ReviewInput />

        {review?.map((item, index) => (
          <Review key={index} item={item} />
        ))}
      </div>

      {/* Hosted By */}
      <div className="flex flex-col py-5 border-b-2 ">
        <div className="flex gap-3">
          <Avatar hSize="h-12" wSize="w-12" />
          <div className="flex flex-col">
            <p className="text-xl">
              Hosted By {room?.User?.firstName} {room?.User?.lastName}
            </p>
            <p className="text-sm font-thin mb-3">
              Joined in {formatMonthYear(room?.User.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start mb-3">
          {/* <svg viewBox='0 0 32 32' className='block h-[1rem] w-[1rem]'>
						<path d='M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z' />
					</svg> */}
          <p className="mt-2">
            {review.length === 0
              ? 'No Review'
              : review.length > 1
              ? `${review.length} reviews`
              : `${review.length} review`}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-light text-gray-600">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
						labore! */}
          </p>
          <p>During your stay </p>
          <p className="font-light text-gray-600">
            If you need any information, please do not hesitate to ask, as our
            house is close to your house, ready to take care of you
          </p>
          <p className="font-light text-gray-600">Languages: English , Thai</p>
        </div>
      </div>
    </>
  )
}

export default RoomContainer
