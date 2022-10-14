import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './slider-style.css';

function Categories() {
  let data = new Array(20).fill(1);

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <header className="bg-white border-b h-20  flex flex-row w-full">
      <div className="flex flex-row justify-between items-center w-full blur-left">
        <button
          className="bg-white border rounded-full p-2 left-button"
          ref={(node) => setPrevEl(node)}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              fill: 'none',
              height: '12px',
              width: '12px',
              stroke: 'currentcolor',
              strokeWidth: '5.33333',
              overflow: 'visible'
            }}
          >
            <g fill="none">
              <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
            </g>
          </svg>
        </button>
        <Swiper
          slidesPerView={10}
          spaceBetween={100}
          slidesPerGroup={10}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
          navigation={{ prevEl, nextEl }}
          className="mySwiper"
        >
          {data.map((i, keys) => {
            return (
              <SwiperSlide key={keys}>
                <div className="flex flex-col justify-center items-center gap-x-5 cursor-pointer select-none	">
                  <img
                    src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                    alt="icon"
                    width="24"
                    height="24"
                  />
                  <div className=" w-24">
                    <span className="text-xs">Creative spaces</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="bg-white border rounded-full p-2"
          ref={(node) => setNextEl(node)}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              fill: 'none',
              height: '12px',
              width: '12px',
              stroke: 'currentcolor',
              strokeWidth: '5.33333',
              overflow: 'visible'
            }}
          >
            <g fill="none">
              <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
            </g>
          </svg>
        </button>
      </div>
      {/* <div className="flex flex-row justify-end items-center w-1/12">
        <button
          type="button"
          className="bg-white border rounded-lg flex flex-row items-center justify-between  h-10 p-3 "
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              height: '14px',
              width: '14px',
              fill: 'currentcolor'
            }}
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <span>Filters</span>
        </button>
      </div> */}
    </header>
  );
}

export default Categories;
