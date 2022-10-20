import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function AmenitiesContainer() {
  let dataMock = [
    {
      name: 'Do you have any standout amenities?',
      lists: new Array(9).fill({
        name: 'Pool',
        icon: 'fa-solid fa-water-ladder'
      })
    },
    {
      name: 'What about these guest favorites?',
      lists: new Array(9).fill({
        name: 'Wifi',
        icon: 'fa-solid fa-wifi'
      })
    },
    {
      name: 'Do you have any of these safety items?',
      lists: new Array(5).fill({
        name: 'Smoke alarm',
        icon: 'fa-solid fa-fire-extinguisher'
      })
    }
  ];

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            Let guests know what your place has to offer
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="mb-10">
          {dataMock.map((itemList) => {
            const { lists, name } = itemList;
            return (
              <div key={name} className="px-20">
                <div className="pt-10 pb-5">
                  <h1 className="text-start text-[1.5rem] font-medium tracking-[0.1rem]">
                    {name}
                  </h1>
                </div>
                <div className="grid gap-x-7 gap-y-4 grid-cols-3 ">
                  {lists.map((item, keys) => {
                    return (
                      <button
                        role="checkbox"
                        key={keys}
                        className="px-7 py-4 h-40 w-44 bg-white border-gray flex flex-col justify-center items-center  border-2  rounded-lg hover:border-black focus:bg-gray-50 focus:border-black"
                      >
                        <i className={`${item.icon} text-[1.9rem] mb-5`}></i>
                        <p className="text-center text-sm">{item.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <BottomMenu
          back={'/create-host/floor-plan/123'}
          next={'/create-host/photos/123'}
        />
      </div>
    </div>
  );
}
export default AmenitiesContainer;
