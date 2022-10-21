import { Link } from 'react-router-dom';
import TopMenu from './TopMenu';

function PreviewContainer() {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-2/4 bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="fixed top-0 bottom-0 left-0 text-white text-center h-screen w-2/4 flex flex-col justify-center">
          <h1 className="text-start text-[4rem] leading-[5rem]	 px-12 font-medium tracking-[0.1rem]">
            Check out your listing!
          </h1>
          <h1 className="text-start text-[1.5rem] pt-3 px-12 font-medium tracking-[0.1rem]">
            Once you save, we’ll ask you to confirm a few details before you can
            publish.
          </h1>
        </div>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-[22%] flex justify-center">
          <div className="px-3 py-3 max-w-[22rem] w-full  bg-white border-gray text-start border-2  justify-between rounded-[2.5rem]">
            <div className=" sticky h-[60vh] card-content box-content flex flex-col pb-14 overflow-auto overflow-y-scroll bg-white border-gray text-start border-2 w-full rounded-[2rem]">
              <div className="flex flex-col h-[13rem]">
                <img
                  className="max-w-full items-center"
                  src="https://a0.muscache.com/im/pictures/ade75bc6-9a2a-453f-9d6d-b7919ff7bd4a.jpg?im_w=720"
                />
              </div>
              <div className="z-2 bg-white px-8">
                <div className="py-5 border-b border-gray">
                  <span className="text-[1.8rem] font-bold ">
                    Rare Villa right on the beach
                  </span>
                </div>
                <div className="py-5 border-b border-gray flex flex-row justify-center items-center">
                  <span className="text-xl">
                    Private room in home hosted by Apinya
                  </span>
                  <img
                    className="w-12 h-12"
                    src="https://a0.muscache.com/defaults/user_pic-68x68.png?v=3"
                    style={{
                      objectFit: 'cover',
                      verticalAlign: 'bottom',
                      borderRadius: '50px'
                    }}
                  />
                </div>
                <div className="py-5 border-b border-gray flex flex-row justify-center items-center">
                  <span className="text-lg font-light">
                    4 guests · Studio · 1 bed · Private half-bath
                  </span>
                </div>
                <div className="py-5 border-b border-gray flex flex-row justify-center items-center">
                  <span className="text-lg font-light">
                    You'll have a great time at this comfortable place to stay.
                  </span>
                </div>
                <div className="pt-5 border-b border-gray flex flex-col">
                  <span className="text-left text-xl my-5">Amenities</span>
                  <div className="py-5 px-1 border-b border-gray flex flex-row justify-between items-center">
                    <span className="text-lg font-light">Hot tub</span>
                    <i className="fa-solid fa-mug-hot text-[1.6rem]"></i>
                  </div>
                  <div className="py-5 px-1 border-b border-gray flex flex-row justify-between items-center">
                    <span className="text-lg font-light">Wifi</span>
                    <i className="fa-solid fa-wifi text-[1.4rem]"></i>
                  </div>
                  <div className="py-5 px-1 border-b border-gray flex flex-row justify-between items-center">
                    <span className="text-lg font-light">TV</span>
                    <i className="fa-solid fa-tv text-[1.4rem]"></i>
                  </div>
                  <div className="py-5 px-1 border-b border-gray flex flex-row justify-between items-center">
                    <span className="text-lg font-light">Washer</span>
                    <i className="fa-solid fa-soap text-[1.4rem]"></i>
                  </div>
                  <div className="py-5 px-1 border-b border-gray flex flex-row justify-between items-center">
                    <span className="text-lg font-light">
                      Free parking on premises
                    </span>
                    <i className="fa-solid fa-p text-[1.4rem]"></i>
                  </div>
                </div>
                <div className="pt-5 flex flex-col">
                  <span className="text-left text-xl my-5">Location</span>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-lg font-light">
                      โกลเด้นทาวน์ 2 ปิ่นเกล้า-จรัญสนิทวงศ์ ตำบล บางกรวย
                      อำเภอบางกรวย นนทบุรี 11130 ประเทศไทย
                    </span>
                  </div>
                  <p className="pt-2 text-left text-sm font-light">
                    We’ll only share your address with guests who are booked as
                    outlined in our
                    <span className=" underline "> privacy policy.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 right-0 z-50 flex justify-between border-t bg-white border-t-slate-200 py-3.5 px-5">
          <Link
            to={'/create-host/price/123'}
            className="px-6 py-3 font-semibold text-black underline underline-offset-1 "
          >
            Back
          </Link>
          <Link
            to={''}
            className="px-5 py-3 font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded shadow-sm bt-let-go"
          >
            Save your listing
          </Link>
        </div>
      </div>
    </div>
  );
}
export default PreviewContainer;
