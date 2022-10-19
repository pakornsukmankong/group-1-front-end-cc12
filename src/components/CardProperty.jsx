import React from 'react';

function CardProperty() {
  return (
    <div className="sticky top-20 border leading-5 rounded-xl p-6 mb-[5.5rem] w-[29.125rem] h-[33rem] border-gray-300">
      <div className="flex mb-6">
        <img
          src="https://a0.muscache.com/im/pictures/23382828/bee5835d_original.jpg?aki_policy=large"
          alt="CardImage"
          className="w-[7.75rem] h-[6.625rem] rounded-lg"
        />
        <div className="flex flex-col justify-between pl-3">
          <div className="text-[#717171] text-[0.75rem] leading-4">
            Private room in treehouse
            <div className="text-[0.875rem] leading-[1.125rem]">
              Tree House 10 mins drive fr center
            </div>
          </div>
          <div className="text-[0.75rem] flex  justify-start items-center gap-[1px]">
            <i className="fa-solid fa-star "></i>
            <span className="font-medium">4.64</span>
            <span className="font-light text-[#717171]">
              &#40; 98 reviews&#41;
            </span>
          </div>
        </div>
      </div>
      <div className="w-[26rem] border border-b-gray-300"></div>
      <div className="py-6 h-[4.25rem] w-[26rem]  border-t-gray-500 ">
        <span>Your booking is protected by</span>
        <span className="text-[#FF385C] font-semibold"> air</span>
        <span className="font-semibold">cover</span>
      </div>
      <div className="w-[26rem] border border-b-gray-300"></div>
      <div className="h-[4.25rem] w-[26rem]  border-t-gray-500  ">
        <div className="font-bold text-2xl py-6 leading-6">Price details</div>
        <div className="flex justify-between font-light my-5 ">
          <div className="underline">฿1,293.54 x 6 nights</div>
          <div>฿7,761.24</div>
        </div>
        <div className="flex justify-between font-light  my-5">
          <div className="underline">Cleaning fee</div>
          <div>฿1,172.52</div>
        </div>
        <div className="flex justify-between font-light  my-5">
          <div className="underline">Service fee</div>
          <div className="text-[#008a05]">฿0.00</div>
        </div>
        <div className="w-[26rem] border border-b-gray-300"></div>
        <div className="flex justify-between font-semibold  my-8">
          <div className="underline">Total &#40; THB&#41;</div>
          <div>฿8933.76</div>
        </div>
      </div>
    </div>
  );
}

export default CardProperty;
