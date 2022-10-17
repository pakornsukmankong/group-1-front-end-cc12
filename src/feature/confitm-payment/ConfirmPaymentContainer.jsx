import React from 'react';
import CardProperty from '../../components/CardProperty';
import ConfirmForm from '../../components/ConfirmForm';

function ConfirmPaymentContainer() {
  return (
    <div className="min-w-full min-h-screen  flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex justify-start ">
          <div className="flex items-stretch  w-[60%]">
            <div className="flex items-center py-16 px-0 min-w-full">
              <i className="fa-solid fa-less-than text-sm pr-8"></i>
              <div className="text-4xl">Confirm and pay</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-32">
          <ConfirmForm />
          <CardProperty />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPaymentContainer;