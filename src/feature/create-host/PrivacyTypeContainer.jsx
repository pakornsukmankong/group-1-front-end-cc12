import { Link } from 'react-router-dom';

function PrivacyTypeContainer() {
  let dataMock = new Array(3).fill({
    privacyName: 'A private room'
  });

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-[3rem] p-10 font-bold text-start">
            What kind of space will guests have?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <div className="sticky top-0 right-0 z-50 py-6 px-12 flex bg-white justify-end space-x-5 ">
          <button className="px-4 py-2  font-semibold text-sm bg-gray-100 text-black rounded-full shadow-sm">
            Help
          </button>
          <button className="px-4 py-2 font-semibold text-sm bg-gray-100 text-black rounded-full shadow-sm">
            Save and exit
          </button>
        </div>
        <div className="px-5 pb-10">
          {dataMock.map((item, keys) => {
            return (
              <div
                key={keys}
                className=" py-8 border-2 text-start bg-white border-slate-400 flex flex-col flex-nowrap rounded-lg mt-5 mx-10 hover:border-black"
              >
                <p className="pl-6 text-start font-medium">
                  {item.privacyName}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sticky bottom-0 right-0 z-50 flex justify-between border-t bg-white border-t-slate-200 py-4 pr-12">
          <Link
            to={'/create-host/property-type/123'}
            className="px-10 py-4 font-semibold text-black underline underline-offset-1 "
          >
            Back
          </Link>
          <Link
            to={'/create-host/location/123456'}
            className="px-6 py-4 font-semibold text-white bg-slate-900 rounded-lg shadow-sm"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PrivacyTypeContainer;
