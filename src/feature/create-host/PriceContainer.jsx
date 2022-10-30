import { useRef, useState } from 'react';
// use lib mask input https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask
import { IMaskInput } from 'react-imask';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

import './create-host.css';
import { updateHostPrice } from '../../api/hostApi';
import { useNavigate } from 'react-router-dom';
import { getHostCreateId } from '../../utils/localStorage';

function PriceContainer() {
  let navigate = useNavigate();
  const [hostId, setHostId] = useState(getHostCreateId());

  const defaultValue = 700;
  const [minPrice, setMinPrice] = useState(defaultValue * 0.9);
  const [maxPrice, setMaxPrice] = useState(defaultValue * 2.5);
  const [price, setPrice] = useState(defaultValue);

  const inputRef = useRef(null);
  const ref = useRef(null);

  const onClickUpdate = (type, value) => {
    let newValue = Number(value);
    if (type === 'increase') {
      newValue += 50;
    } else {
      newValue -= 50;
      if (newValue < 0) {
        newValue = 0;
      }
    }
    setPrice(newValue);
  };

  const onNext = async (price) => {
    try {
      const input = {
        propertyId: hostId,
        pricePerDate: price
      };
      const res = await updateHostPrice(input);
      if (res.status === 201) {
        navigate(`/create-host/preview/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (value) => {
    setPrice(value);
  };

  const formatNumber = (value) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
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
              <IMaskInput
                className="w-full h-[6rem] text-[4rem] font-medium text-center bg-white border-gray flex justify-center items-center flex-col border-2 rounded-lg  hover:border-black  focus:border-black focus-visible:border-black   focus-visible:outline-black "
                mask={'฿000000000'}
                radix="."
                value={price.toString()}
                ref={ref}
                inputRef={inputRef}
                placeholder="฿00"
                unmask={true}
                onAccept={(value) => onChange(value)}
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
                ฿{formatNumber(minPrice)} to ฿{formatNumber(maxPrice)}
                <span className="ml-3">
                  <i className="fa-solid fa-circle-info w-3"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <BottomMenu
          back={`/create-host/description/${hostId}`}
          disableNext={price > 0 ? false : true}
          onNext={() => onNext(price)}
        />
      </div>
    </div>
  );
}
export default PriceContainer;
