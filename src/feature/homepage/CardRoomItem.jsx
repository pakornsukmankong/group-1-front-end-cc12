import { useState } from 'react';
import { useProperty } from '../../contexts/PropertyContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './card-room-item.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/priceFormat';

function CardRoomItem({ dataItem }) {
  const { wishList, toggleWishList } = useProperty(null);
  const {
    id,
    propertyName,
    address,
    pricePerDate,
    PropertyImages
    // roomRate,
    // roomOpen,
  } = dataItem;

  const wishListed = wishList?.map((property) => property?.propertyId);
  const userWishList = wishListed?.includes(id);

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const favAction = async () => {
    await toggleWishList(id);
  };

  return (
    <div className="group cursor-pointer card-container">
      <div className="aspect-[149125/141668]">
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          navigation={{ prevEl, nextEl }}
        >
          {(PropertyImages || []).map((item, keys) => {
            return (
              <SwiperSlide key={keys}>
                <Link to={`/rooms/${id}`}>
                  <img
                    className="object-cover aspect-[149125/141668] rounded-lg"
                    src={item.propertyImage}
                    alt="roomTitle"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="text-white text-[1.25rem] flex justify-end mx-5 absolute top-[7%] right-0 z-[3] ">
            <svg
              onClick={favAction}
              className={`fill-black/50 w-6 h-6 stroke-white stroke-2 ${
                userWishList ? 'fill-[#ff385c]' : ''
              }`}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </div>
          <div className="hidden group-hover:flex justify-between absolute top-[45%] w-full px-[1rem] z-[3] cursor-pointer">
            <div>
              <button
                className="bg-white shadow border rounded-full flex p-2 card-prev"
                ref={(node) => setPrevEl(node)}
              >
                <i className="fa-solid fa-chevron-left text-[0.75rem] h-3 w-3"></i>
              </button>
            </div>
            <Link className="w-full" to={`/rooms/${id}`}></Link>
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

      <Link to={`/rooms/${id}`}>
        <div className="py-2">
          <div className="font-bold flex justify-between">
            <span>{propertyName}</span>
            <div className="font-bold flex items-center">
              <i className="fa-solid fa-star text-[0.75rem] mr-1"></i>
              <span className="font-light text-sm">New</span>
            </div>
          </div>
          <div className="font-light text-gray text-sm">{address}</div>
          {/* <div className='font-light text-gray'>roomOpen</div> */}
          <div className="font-medium">
            <span> ฿{formatPrice(pricePerDate)}</span>
            <span className="font-light"> night </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardRoomItem;
