import { useEffect, useState, createContext, useContext } from 'react'
import * as bookingService from '../api/bookingApi'

const BookingContext = createContext()

function BookingContextProvider({ children }) {
  const [userBooking, setUserBooking] = useState(null)

  // console.log(userBooking, 'userBooking');

  const getUserBooking = async () => {
    const res = await bookingService.getUserBooking()
    // console.log(res.data.booking);
    setUserBooking(res.data.booking)
  }

  useEffect(() => {
    getUserBooking()
  }, [])

  return (
    <BookingContext.Provider value={{ userBooking, getUserBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  return useContext(BookingContext)
}

export default BookingContextProvider
