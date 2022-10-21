import { useRef, useState } from 'react';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

import './create-host.css';

function PriceContainer() {
  const [price, setPrice] = useState(782);
  const inputRef = useRef(null);

  const onClickUpdate = (type, value) => {
    let newValue = value;
    if (type === 'increase') {
      newValue += 50;
    } else {
      newValue -= 50;
      if (newValue < 0) {
        newValue = 0;
      }
    }
    setPrice(newValue);
    inputRef.current.value = `฿${newValue}`;
  };

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <div className="basis-2/4 bg-slate-500">
        <video
          className="h-[30%] w-full object-none object-center sm:h-screen"
          controls
          autoPlay
          muted
          style={{ objectFit: 'cover', objectPosition: '0px 25%' }}
        >
          <source
            src="https://a0.muscache.com/v/9c/d4/9cd47434-c6bd-58ec-90b7-b50aa7dba461/9cd47434c6bd58ec90b7b50aa7dba461_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-24 pb-10">
          <div className="py-10">
            <div className="flex justify-center items-center gap-8">
              <button
                disabled={price <= 0}
                onClick={() => onClickUpdate('minus', price)}
                className="px-5 py-3 text-[1rem] font-semibold  border-2 border-gray text-black rounded-full disabled:opacity-40"
              >
                -
              </button>
              <input
                ref={inputRef}
                type="text"
                className="w-full h-[6rem] text-[4rem] font-medium text-center bg-white border-gray flex justify-center items-center flex-col border-2 rounded-lg  hover:border-black  focus:border-black focus-visible:border-black   focus-visible:outline-black "
                defaultValue={`฿${price} ` ?? ''}
              />
              <button
                onClick={() => onClickUpdate('increase', price)}
                className="px-5 py-3 text-[1rem] font-semibold  border-2 border-gray text-black rounded-full disabled:opacity-40"
              >
                +
              </button>
            </div>
            <p className="text-center mt-3 mb-10 font-light">per night</p>
            <div className="flex justify-center mx-[6rem]">
              <p className="text-center text-[1.2rem] font-light tracking-[0.1rem] ">
                Keep in mind, places like yours in your area usually range from
                ฿819 to ฿1,365
                <span className="ml-3">
                  <i className="fa-solid fa-circle-info w-3"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="pt-10 pb-5 px-7">
            <label className="flex flex-row justify-center items-center cursor-pointer px-6 py-4 text-[1rem] bg-white border-gray  border-2 rounded-lg ">
              <div className="">
                <span>
                  Offer a 20% discount for your first 3 guests to help you get
                  booked faster.
                </span>
                <span className="ml-2 underline font-medium">Learn more</span>
              </div>
              <div className="checkbox border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-black">
                <input type="checkbox" className="opacity-0 absolute group " />
                <svg
                  className="hidden w-4 h-4 fill-white text-black cursor-pointer"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
            </label>
          </div>
        </div>
        <BottomMenu
          back={'/create-host/description/123'}
          next={'/create-host/preview/123'}
        />
      </div>
    </div>
  );
}
export default PriceContainer;
