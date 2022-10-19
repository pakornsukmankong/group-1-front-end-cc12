import React, { useEffect, useState } from 'react';

function ConfirmForm() {
  useEffect(() => {
    let OmiseCard = window.OmiseCard;

    OmiseCard.configure({
      publicKey: 'pkey_test_5tipgjhhwdna10j7tym',
      currency: 'thb',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_TqPBvcf1ps6F-vN5KHDqq3JQ3MThjPqxNFEjbUu&s',
      frameLabel: 'airBnb',
      amount: 893376,
      submitLabel: 'Pay now',
      buttonLabel: 'Confirm and pay',
    });
  }, []);

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMehod: 'credit_card',
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton('#credit-card');
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      frameDescription: 'Invoice #0001',
      amount: 2000,
      onCreateTokenSuccess: (token) => {
        console.log(token);
      },
      onFormClose: () => {},
    });
  };

  const handleClickConfirmPayment = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  const createCreditCardCharge = () => {};

  const [methodPay, setMethodPay] = useState('CREDIT_CARD');
  return (
    <form>
      <div className="border border-gray-300 p-6 rounded-lg w-[34rem] mb-6">
        <div className="relative flex flex-col">
          <i className="fa-solid fa-tag absolute right-5 top-1 text-[1.7rem] text-red-400"></i>
          <span className="font-[800]">Good price</span>
          <span className="w-[26.75rem]">
            Your dates are ฿1,071 less than the avg. nightly rate over the last
            3 months.
          </span>
        </div>
      </div>
      <div className="mb-4 w-[34rem] font-bold text-[1.4rem]">Your trip</div>
      <div className="flex justify-between w-[34rem]">
        <span>Dates</span>
        <span className="underline">Edit</span>
      </div>
      <div className="flex justify-start w-[34rem] text-gray-700  pb-6">
        <span>Oct 15-21</span>
      </div>
      <div className="flex justify-between w-[34rem]">
        <span>Check-in time</span>
        <span className="underline">Edit</span>
      </div>
      <div className="flex justify-start w-[34rem] text-gray-700  pb-6">
        <span>3:00 PM - 5:00 PM</span>
      </div>
      <div className="flex justify-between w-[34rem]">
        <span>Guests</span>
        <span className="underline">Edit</span>
      </div>
      <div className="flex justify-start w-[34rem] text-gray-700  pb-6">
        <span>1 guest</span>
      </div>

      <div className="w-[34rem] border-b border-gray-300"></div>

      <div className="w-[34rem] pt-8 pb-6">
        <div className="flex justify-between mb-3">
          <label
            htmlFor="payments"
            className=" mb-2 text-gray-900 dark:text-gray-400 flex justify-between"
          >
            <span className="font-bold  text-gray-900 text-[1.4rem]">
              Pay with
            </span>
          </label>
          <label htmlFor="payments">
            <span className="flex items-center">
              <i className="fa-brands fa-cc-visa text-[1.5rem]"></i>&nbsp;
              <i className="fa-brands fa-cc-mastercard text-[1.5rem]"></i>&nbsp;
            </span>
          </label>
        </div>
        <select
          id="payments"
          value={methodPay}
          onChange={(e) => setMethodPay(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-blue-500 hover:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-blue-500 dark:hover:border-blue-500"
        >
          <option disabled>Choose Method To Pay</option>
          <option value="CREDIT_CARD">CREDIT CARD</option>
          <option value="OMISE">OMISE</option>
        </select>
      </div>

      {/* <div>
        <div className=" mb-3 border border-gray-300 w-[34rem] h-[9rem] rounded-xl flex flex-col ">
          <div className=" h-[4.5rem] w-[33.9rem] border-b border-b-gray-300 hover:border-0">
            <input
              type="text"
              name="creditCardNumber"
              placeholder="Card number  "
              className="pl-5 min-w-full min-h-full bg-gray-50 rounded-xl border-0  outline-0 hover:border-2 hover:border-red-800 hover:rounded-xl"
            />
          </div>
          <div className="w-[34rem] flex flex-rows gap-[0.1px]">
            <input
              type="text"
              name="Expiration"
              placeholder="Expiration"
              className="pl-5 rounded-xl  bg-gray-50 w-[16.9rem] h-[4.5rem] border-0 hover:border-2 hover:border-red-800 hover:rounded-xl"
            />
            <div className="border-l h-[4.5rem]"></div>
            <input
              type="text"
              placeholder="CVV"
              name="CVV"
              className="pl-5 rounded-xl bg-gray-50 w-[16.9rem] h-[4.5rem]  border-0 hover:border-2 hover:border-red-800 hover:rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="mb-3 h-[4.5rem] w-[33.9rem] border rounded-xl  border-b-gray-300 hover:border-0">
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP code"
          className="pl-5 min-w-full min-h-full bg-gray-50 rounded-xl border-0  outline-0 hover:border-2 hover:border-red-800 hover:rounded-xl"
        />
      </div>
      <div className="mt-4 relative h-[4rem] w-[33.9rem] border rounded-xl  border-b-gray-300 hover:border-0">
        <span className="absolute top-1 left-5 text-sm font-normal">
          Country
        </span>
        <input
          type="text"
          name="zipCode"
          disabled
          defaultValue="Thailand"
          placeholder="Thailand"
          className="pl-5 min-w-full min-h-full bg-gray-50 rounded-xl border-0 disabled text-gray-700  hover:border-2 hover:border-red-800 hover:rounded-xl"
        />
      </div> */}
      <div className="flex justify-center my-10">
        Secured by &nbsp;
        <img
          className="w-7 h-7 inline-block  bg-gray-50 "
          src="data:image/png;base64,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"
          alt=""
        />
        &nbsp; <span className="font-extrabold">Omise</span>
      </div>
      <div>
        <div className="mt-14 w-[34rem] border-b border-gray-300"></div>
        <div className="my-5 w-[34rem] font-bold text-[1.4rem]">
          Cancellation policy
        </div>

        <div className="flex justify-start w-[34rem] text-gray-700  pb-6">
          <span className="text-sm">
            This reservation is non-refundable.
            <span className="font-semibold underline">Learn more</span>
          </span>
        </div>
        <div className="mt-3 w-[34rem] border-b border-gray-300"></div>

        <div className="mt-14 w-[34rem] border-white">
          <span className="font-extralight text-xs leading-none">
            By selecting the button below, I agree to the &nbsp;
            <strong className="underline">
              Host's House Rules, Airbnb's Rebooking and Refund Policy
            </strong>
            , and that Airbnb can &nbsp;
            <strong className="underline">charge my payment method</strong>
            &nbsp;if I'm responsible for damage.
          </span>
        </div>
      </div>

      <button
        id="credit-card"
        className="text-center text-white my-8 h-[3.5rem] w-[12.75rem] bg-[#FF385C] flex justify-center items-center rounded-lg"
        onClick={handleClickConfirmPayment}
      >
        Confirm and pay
      </button>
    </form>
  );
}

export default ConfirmForm;
