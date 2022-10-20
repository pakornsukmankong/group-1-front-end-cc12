import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function PhotosContainer() {
  let dataMock = new Array(21).fill({
    propertyName: 'Villa',
    propertyDetail:
      'A luxury home that may have indoor-outdoor spaces, gardens, and pools.'
  });

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
            src="https://a0.muscache.com/v/d6/12/d6120feb-75fc-52dd-b5bb-5755913fb756/d6120feb75fc52ddb5bb5755913fb756_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 pb-10">
          <button
            role="checkbox"
            className="px-7 py-4 w-[100%] h-[20rem] bg-white border-gray flex justify-center items-center flex-col border-dashed border-2  hover:border-black focus:bg-gray-50 focus:border-black"
          >
            <i className="fa-solid fa-images text-[4rem] mb-5"></i>
            <p className="text-center font-medium text-[1.5rem] mb-2">
              Drag your photos here
            </p>
            <p className="text-center font-light text-md mb-3">
              Add at least 5 photos
            </p>
            <p className="text-center text-sm">Upload from your device</p>
          </button>
        </div>
        <BottomMenu
          back={'/create-host/amenities/123'}
          next={'/create-host/title/123'}
        />
      </div>
    </div>
  );
}
export default PhotosContainer;
