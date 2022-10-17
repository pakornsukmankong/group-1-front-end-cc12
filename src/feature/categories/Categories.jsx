import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './categories.css';

function Categories() {
  const listMock = [
    {
      name: 'Creative spaces',
      image:
        'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg',
      active: false
    },
    {
      name: 'Design',
      image:
        'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
      active: false
    },
    {
      name: 'Amazing views',
      image:
        'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      active: false
    },
    {
      name: 'Beachfront',
      image:
        'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      active: false
    },
    {
      name: 'Castles',
      image:
        'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
      active: false
    },
    {
      name: 'Lake',
      image:
        'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg',
      active: false
    },
    {
      name: 'Beach',
      image:
        'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
      active: false
    }
  ];
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const [category, setCategory] = useState();

  const onClickSlider = (indexActive) => {
    let newArr = category.map((item, index) => {
      if (index === indexActive) {
        return {
          ...item,
          active: true
        };
      }
      return {
        ...item,
        active: false
      };
    });
    setCategory([...newArr]);
  };

  useEffect(() => {
    function initCategory() {
      let mockData = new Array(20).fill(1).map((i) => {
        return listMock[getRandom(0, listMock.length)];
      });
      setCategory(mockData);
    }

    initCategory();
  }, []);

  return (
    <header className="px-12 bg-white border-b h-20 flex flex-row w-full ">
      <div className="flex flex-row justify-between items-center w-full blur-left">
        <button
          className="bg-white border rounded-full left-button flex p-2"
          ref={(node) => setPrevEl(node)}
        >
          <i className="fa-solid fa-chevron-left text-[0.75rem] h-3 w-3"></i>
        </button>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 1,
              slidesPerGroup: 1
            },
            425: {
              slidesPerView: 3,
              spaceBetween: 1,
              slidesPerGroup: 3
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 1,
              slidesPerGroup: 4
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 1,
              slidesPerGroup: 5
            },
            1440: {
              slidesPerView: 10,
              spaceBetween: 100,
              slidesPerGroup: 10
            }
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
          navigation={{ prevEl, nextEl }}
          className="mySwiper"
        >
          {category &&
            category.map((item, keys) => {
              return (
                <SwiperSlide key={keys} onClick={() => onClickSlider(keys)}>
                  <div
                    className={`flex flex-col justify-center items-center gap-x-5 cursor-pointer select-none ${
                      item.active ? 'item-active' : ''
                    }`}
                  >
                    <img src={item.image} alt="icon" width="24" height="24" />
                    <div className="w-24 text-center">
                      <span className="text-xs">{item.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button
          className="bg-white border rounded-full left-button flex p-2"
          ref={(node) => setNextEl(node)}
        >
          <i className="fa-solid fa-chevron-right text-[0.75rem] h-3 w-3"></i>
        </button>
      </div>
    </header>
  );
}

export default Categories;
