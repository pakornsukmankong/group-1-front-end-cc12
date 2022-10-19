import { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import './image-room-item.css'

function ImageItem() {
  const [prevEl, setPrevEl] = useState(null)
  const [nextEl, setNextEl] = useState(null)

  const [swiperActive, setSwiperActive] = useState()

  const activeChange = (swiper) => {
    setSwiperActive(swiper)
  }

  const mockImages = [
    'https://a0.muscache.com/im/pictures/ade75bc6-9a2a-453f-9d6d-b7919ff7bd4a.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/f255c96c-a0f0-44f0-a975-fcb63ec74e71.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/70bca335-129b-4a83-bfe0-6a8c52baf448.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/4abb7e2c-ad31-4f84-a36a-40e1a8b15084.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/ffadcfe3-75de-4c1d-b94c-2c609bf96c38.jpg?im_w=720',
  ]

  return (
    <div className="card-container">
      <Swiper
        onActiveIndexChange={activeChange}
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        navigation={{ prevEl, nextEl }}
        className="room-card-swiper">
        {mockImages.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="w-screen rounded-lg h-[20rem] md:h-[30rem]"
                src={item}
                alt="img"
              />
            </SwiperSlide>
          )
        })}
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
    </div>
  )
}

export default ImageItem
