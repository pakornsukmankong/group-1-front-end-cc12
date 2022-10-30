import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './category.css';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { getCategoryList } from '../../api/hostApi';
import {
  createSearchParams,
  useNavigate,
  useSearchParams
} from 'react-router-dom';
import { useProperty } from '../../contexts/PropertyContext';
import * as propertyService from '../../api/propertyApi';

function Categories() {
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { setProperty } = useProperty();

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [swiper, setSwiper] = useState(null);

  const [category, setCategory] = useState();

  const onClickSlider = async (indexActive, itemActive) => {
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

    const param = Object.fromEntries([...searchParams, ['id', itemActive.id]]);
    const queryParam = createSearchParams(param).toString();
    await fetchProperty(queryParam);
    navigate({
      pathname: '/',
      search: queryParam
    });
  };

  const fetchProperty = async (queryParam) => {
    try {
      let res = await propertyService.getPropertyByCategory(queryParam);
      setProperty(res.data.property);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initCategory = async () => {
      try {
        const res = await getCategoryList();
        const { data } = res.data;
        const mapData = data.map((i) => ({
          ...i,
          active: i.id === +searchParams.get('id') ? true : false
        }));
        setCategory(mapData);
      } catch (err) {
        console.log(err);
      }
    };

    const initSwiper = async () => {
      if (swiper) {
        const timer = setTimeout(() => {
          const activeId = +searchParams.get('id');
          swiper.slideTo(activeId);
        }, 500);
        return () => clearTimeout(timer);
      }
    };

    initCategory();
    initSwiper();
  }, [swiper]);

  return (
    <header className="bg-white border-b h-20 flex flex-row w-full ">
      <div className="flex flex-row justify-between items-center w-full gap-x-4">
        <button
          className="bg-white border rounded-full left-button flex p-2 category-prev"
          ref={(node) => setPrevEl(node)}
        >
          <i className="fa-solid fa-chevron-left text-[0.75rem] h-3 w-3"></i>
        </button>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
              slidesPerGroup: 1
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 1,
              slidesPerGroup: 2
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 15,
              slidesPerGroup: 5
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
              slidesPerGroup: 7
            },
            1440: {
              slidesPerView: 10,
              spaceBetween: 15,
              slidesPerGroup: 10
            }
          }}
          modules={[Pagination, Navigation]}
          navigation={{ prevEl, nextEl }}
          onSwiper={(s) => setSwiper(s)}
          className="mySwiper"
        >
          {category &&
            category.map((item, keys) => {
              return (
                <SwiperSlide
                  key={keys}
                  onClick={() => onClickSlider(keys, item)}
                >
                  <div className="flex flex-col justify-center items-center gap-x-5 cursor-pointer select-none">
                    <img
                      src={item.categoryIconImage}
                      alt="icon"
                      width="24"
                      height="24"
                    />
                    <div
                      className={`w-24 text-center ${
                        item.active ? ' border-b-2 border-b-black ' : ''
                      } `}
                    >
                      <span className="text-xs">{item.categoryName}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button
          className="bg-white border rounded-full left-button flex p-2 category-next"
          ref={(node) => setNextEl(node)}
        >
          <i className="fa-solid fa-chevron-right text-[0.75rem] h-3 w-3"></i>
        </button>
      </div>
    </header>
  );
}

export default Categories;
