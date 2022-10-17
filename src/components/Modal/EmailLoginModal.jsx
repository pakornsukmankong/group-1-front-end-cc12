import React from 'react';

function EmailLoginModal() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 leading-5">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative w-[568px] h-[4rem] px-6 bg-white rounded-t-xl flex justify-center items-center font-extrabold text-base">
          <i className="absolute left-6 fa-solid fa-xmark rounded-full text-lg "></i>
          <div className="flex justify-center"> Log in or sign up</div>
          <hr />
        </div>
        <hr className="bg-gray-300" />
        <div className="w-[568px] h-[520px] px-6 bg-white rounded-b-xl flex flex-col">
          <div className="my-5 font-bold text-2xl">Welcome to Airbnb</div>

          <input
            type="text"
            placeholder="Email"
            className="pl-5 mb-3 border border-gray-300 h-[4.1rem] rounded-xl flex flex-col "
          />
          <div>
            <button className="my-3 min-w-full h-12 text-base  flex items-center justify-center text-white rounded-lg bg-[#FF385C] hover:bg-[#ff0532]">
              Continue
            </button>
            <div className="my-3 flex flex-row items-center">
              <hr className="block grow" />
              <div className="px-5 text-sm text-gray-600">or</div>
              <hr className="block grow" />
            </div>
              <div className="flex flex-col justify-around gap-4">
                <button className="min-w-full h-12 text-base  flex items-center justify-start gap-[8rem] border border-black rounded-lg hover:bg-gray-50 ">
                  <i className=" ml-6 fa-brands fa-facebook-f text-blue-700 justify-self-start"></i>
                  <span>Continue with Facebook</span>
                </button>
                <button className=" min-w-full h-12 text-base  flex items-center justify-start gap-[8rem]  border border-black rounded-lg  hover:bg-gray-50 ">
                  <i className="ml-6 fa-brands fa-google text-red-700"></i>
                  <span>Continue with Google</span>
                </button>

                <button className="min-w-full h-12 text-base  flex items-center justify-start gap-[8rem] border border-black rounded-lg hover:bg-gray-50 ">
                  <i className="ml-6 fa-brands fa-apple text-xl"></i>
                  <span>Continue with Apple</span>
                </button>
                <button className="min-w-full h-12 text-base  flex items-center justify-start gap-[8rem] border border-black rounded-lg hover:bg-gray-50 ">
                  <i className="ml-6 fa-solid fa-mobile text-xl"></i>
                  <span>Continue with phone</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EmailLoginModal;
