import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function TypeGroupContainer() {
  let dataMock = new Array(6).fill({
    categoryName: 'House',
    image:
      'https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240'
  });

  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[3rem] p-12 font-medium tracking-[0.19rem]">
            What kind of place will you host?
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 text-center pb-10">
          {dataMock.map((item, keys) => {
            return (
              <button
                key={keys}
                className="border-2 w-full	bg-white border-gray flex flex-row flex-nowrap justify-between items-center rounded-lg mt-5 hover:border-black focus:bg-gray-50 focus:border-black"
              >
                <div className="pl-6 font-medium">{item.categoryName}</div>
                <div className="aspect-square h-24 p-4 ">
                  <img
                    className="object-cover rounded-md"
                    src={item.image}
                    alt="image"
                  />
                </div>
              </button>
            );
          })}
        </div>
        <BottomMenu
          back={'/create-host/intro'}
          next={'/create-host/property-type/123'}
        />
      </div>
    </div>
  );
}
export default TypeGroupContainer;
