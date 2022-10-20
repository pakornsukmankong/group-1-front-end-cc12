import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function PropertyTypeContainer() {
  let dataMock = new Array(21).fill({
    propertyName: 'Villa',
    propertyDetail:
      'A luxury home that may have indoor-outdoor spaces, gardens, and pools.'
  });

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.1rem]">
            Which of these best describes your place?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 pb-10">
          {dataMock.map((item, keys) => {
            return (
              <button
                key={keys}
                className="px-7 py-4 bg-white border-gray text-start flex flex-col flex-nowrap border-2 w-full justify-between  rounded-lg mt-5 hover:border-black focus:bg-gray-50 focus:border-black"
              >
                <p className=" text-start font-medium">{item.propertyName}</p>
                <p className="font-light">{item.propertyDetail}</p>
              </button>
            );
          })}
        </div>
        <BottomMenu
          back={'/create-host/property-type-group'}
          next={'/create-host/privacy-type/123'}
        />
      </div>
    </div>
  );
}
export default PropertyTypeContainer;
