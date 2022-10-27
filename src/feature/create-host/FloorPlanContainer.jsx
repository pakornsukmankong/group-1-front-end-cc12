import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateHostFloorPlan } from '../../api/hostApi';
import { getHostCreateId } from '../../utils/localStorage';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function FloorPlanContainer() {
  let dataMock = [
    { name: 'Guests', value: 4 },
    { name: 'Beds', value: 1 },
    { name: 'Bedrooms', value: 1 },
    { name: 'Bathrooms', value: 1 }
  ];

  let navigate = useNavigate();

  const [selectRoom, setSelectRoom] = useState(dataMock);
  const [hostId, setHostId] = useState(getHostCreateId());

  const onClickUpdate = (type, name) => {
    const newArr = [...selectRoom];
    const updateIndex = newArr.findIndex((item) => item.name === name);
    if (type === 'increase') {
      newArr[updateIndex].value++;
    } else {
      newArr[updateIndex].value--;
    }
    setSelectRoom(newArr);
  };

  const onNext = async (selectRoom) => {
    try {
      const input = {
        propertyId: hostId,
        guestQty: selectRoom[0].value,
        bedQty: selectRoom[1].value,
        bedRoomQty: selectRoom[2].value,
        bathRoomQty: selectRoom[3].value
      };

      const res = await updateHostFloorPlan(input);
      if (res.status === 201) {
        navigate(`/create-host/amenities/${hostId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            How many guests would you like to welcome?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 pb-10 pt-32">
          {selectRoom.map((item, keys) => {
            return (
              <div key={keys} className="flex justify-between mb-10">
                <div className="font-medium text-3xl tracking-[.19rem]">
                  {item.name}
                </div>
                <div className="flex justify-center items-center gap-3">
                  <button
                    disabled={item.value === 1}
                    onClick={() => onClickUpdate('minus', item.name)}
                    className="px-2.5 py-1 font-semibold text-sm border-2 border-gray text-black rounded-full disabled:opacity-40"
                  >
                    -
                  </button>
                  <div className="font-medium w-4 text-center">
                    {item.value}
                  </div>

                  <button
                    onClick={() => onClickUpdate('increase', item.name)}
                    className="px-2.5 py-1 font-semibold text-sm border-2 border-gray text-black rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <BottomMenu
          back={`/create-host/location/${hostId}`}
          disableNext={selectRoom ? false : true}
          onNext={() => onNext(selectRoom)}
        />
      </div>
    </div>
  );
}
export default FloorPlanContainer;
