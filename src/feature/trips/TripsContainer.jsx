import { useEffect } from 'react'
import { useBooking } from '../../contexts/BookingContext'
import TripNoBooking from './TripNoBooking'
import TripsItem from './TripsItem'

function TripsContainer() {
  const { userBooking, getUserBooking } = useBooking()
  console.log(userBooking, 'userBooking')

  useEffect(() => {
    getUserBooking()
  }, [])

  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[2rem] mt-[1rem] pb-5 border-b-2">
          <h1 className="my-auto">Trips</h1>
        </div>

        {userBooking?.length ? (
          <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
            {userBooking?.map((item) => (
              <TripsItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <>
            <TripNoBooking />
          </>
        )}
      </div>
    </>
  )
}

export default TripsContainer
