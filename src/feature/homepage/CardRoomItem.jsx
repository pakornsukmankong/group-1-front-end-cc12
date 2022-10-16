import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './card-room-item.css';

function CardRoomItem({ dataItem }) {
  const { roomTitle, roomLocation, roomOpen, roomPrice, roomRate, imageList } =
    dataItem;

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const [swiperActive, setSwiperActive] = useState();

  const [favorite, setFavorite] = useState(false);

  const activeChange = (swiper) => {
    setSwiperActive(swiper);
  };

  const favAction = (item) => {
    setFavorite(!favorite);
  };

  return (
    <div className="cursor-pointer card-container">
      <div className="aspect-[149125/141668]">
        <Swiper
          onActiveIndexChange={activeChange}
          pagination={{
            dynamicBullets: true
          }}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          navigation={{ prevEl, nextEl }}
          className="room-card-swiper"
        >
          {imageList.map((item, keys) => {
            return (
              <SwiperSlide key={keys}>
                <img
                  className="object-cover aspect-[149125/141668] rounded-lg"
                  src={item}
                  alt={roomTitle}
                />
              </SwiperSlide>
            );
          })}
          <div className="card-favorite-icon text-white text-[1.25rem] flex justify-end mx-5">
            <svg
              onClick={favAction}
              className={`card-icon ${favorite ? 'active' : ''}`}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </div>
          <div className="card-navigation">
            <div>
              <button
                className="bg-white shadow border rounded-full flex p-2 card-prev"
                ref={(node) => setPrevEl(node)}
              >
                <i className="fa-solid fa-chevron-left text-[0.75rem] h-3 w-3"></i>
              </button>
            </div>
            <div>
              <button
                className="bg-white shadow border rounded-full flex p-2 card-next"
                ref={(node) => setNextEl(node)}
              >
                <i className="fa-solid fa-chevron-right text-[0.75rem] h-3 w-3"></i>
              </button>
            </div>
          </div>
        </Swiper>
      </div>

      <div className="py-2">
        <div className="font-bold flex justify-between">
          <span>{roomTitle}</span>
          <div className="font-bold flex items-center">
            <i className="fa-solid fa-star text-[0.7rem] mr-1"></i>
            <span className="font-light">{roomRate}</span>
          </div>
        </div>
        <div className="font-light text-gray">{roomLocation}</div>
        <div className="font-light text-gray">{roomOpen}</div>
        <div className="font-medium">
          <span>{roomPrice}</span>
          <span className="font-light"> night </span>
        </div>
      </div>
    </div>
  );
}

export default CardRoomItem;
