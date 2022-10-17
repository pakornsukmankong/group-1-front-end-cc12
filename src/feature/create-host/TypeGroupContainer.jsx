import { Link } from 'react-router-dom';

function TypeGroupContainer() {
  let dataMock = new Array(8).fill({
    categoryName: 'Apartment',
    image:
      'https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240'
  });

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-[3rem] p-10 font-bold">
            What kind of place will you host?
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
        <div className="px-5 text-center pb-10">
          {dataMock.map((item, keys) => {
            return (
              <div
                key={keys}
                className="border-2	bg-white border-slate-400 flex flex-row flex-nowrap justify-between items-center rounded-lg mt-5 mx-10 hover:border-black"
              >
                <div className="pl-6 font-medium">{item.categoryName}</div>
                <div className="aspect-square h-24 p-4 ">
                  <img
                    className="object-cover rounded-md"
                    src={item.image}
                    alt="image"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="sticky bottom-0 right-0 z-50 flex justify-between border-t bg-white border-t-slate-200 py-4 pr-12">
          <Link
            to={'/create-host/intro'}
            className="px-10 py-4 font-semibold text-black underline underline-offset-1 "
          >
            Back
          </Link>
          <Link
            to={'/create-host/property-type/123'}
            className="px-6 py-4 font-semibold text-white bg-slate-900 rounded-lg shadow-sm"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TypeGroupContainer;
