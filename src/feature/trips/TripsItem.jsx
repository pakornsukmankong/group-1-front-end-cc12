import { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import './trips-item.css'
import { Link } from 'react-router-dom'

import { formatPrice } from '../../utils/priceFormat'

function TripsItem({ item }) {
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  // console.log(item.Property.PropertyImages[0].propertyImage, 'Item')

  return (
    <div className="card-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        navigation={{ prevEl, nextEl }}
        className="room-card-swiper">
        {item?.Property?.PropertyImages?.map((property, index) => (
          <SwiperSlide key={index}>
            <Link to={`/rooms/${item.Property.id}`}>
              {/* {`/rooms/${item.id}`} */}
              <img
                src={property.propertyImage}
                alt="image"
                className="w-screen rounded-lg h-[20rem] "
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="card-navigation">
          <div>
            <button
              className="bg-white shadow border rounded-full flex p-2 card-prev"
              ref={(node) => setPrevEl(node)}>
              <i className="fa-solid fa-chevron-left text-[0.75rem] h-3 w-3"></i>
            </button>
          </div>
          <div>
            <button
              className="bg-white shadow border rounded-full flex p-2 card-next"
              ref={(node) => setNextEl(node)}>
              <i className="fa-solid fa-chevron-right text-[0.75rem] h-3 w-3"></i>
            </button>
          </div>
        </div>
      </Swiper>
      <div className="flex flex-col py-2 gap-1 font-bold">
        <div>Place: {item?.Property?.propertyName}</div>
        <div>Check in date : {item?.checkInDate.substring(0, 10)}</div>
        <div>Check out date : {item?.checkOutDate.substring(0, 10)}</div>
        <div>Total price : ฿{formatPrice(item?.amountPaid)}</div>
      </div>
    </div>
  )
}

export default TripsItem
