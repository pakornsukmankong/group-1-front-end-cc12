import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { getCategoryList } from '../../api/hostApi';
import { useNavigate } from 'react-router-dom';
import { useProperty } from '../../contexts/PropertyContext';
import * as propertyService from '../../api/propertyApi';

function Categories() {
  let navigate = useNavigate();

  const { setProperty } = useProperty();

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

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
    await fetchProperty(itemActive.id);
    navigate({
      pathname: '/',
      search: `?id=${itemActive.id}`
    });
  };

  const fetchProperty = async (categoryId) => {
    try {
      let res = await propertyService.getPropertyByCategory(categoryId);
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
        const mapData = data.map((i) => ({ ...i, active: false }));
        setCategory(mapData);
      } catch (err) {
        console.log(err);
      }
    };

    initCategory();
  }, []);

  return (
    <header className="bg-white border-b h-20 flex flex-row w-full ">
      <div className="flex flex-row justify-between items-center w-full gap-x-4">
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
