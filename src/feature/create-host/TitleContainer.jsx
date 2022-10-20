import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import TopMenu from './TopMenu';

function TitleContainer() {
  const maxLength = 50;
  const [count, setCount] = useState(0);

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
            src="https://a0.muscache.com/v/33/20/3320c65c-5167-5999-ad8b-89c6c0c27b53/3320c65c51675999ad8b89c6c0c27b53_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-white flex flex-col justify-between">
        <TopMenu />
        <div className="px-32 pb-10">
          <div className="pt-10 pb-5">
            <p className="text-start text-[1.5rem] font-medium tracking-[0.1rem] mb-4">
              Create your title
            </p>
            <span className="text-start text-gray-500 ">
              Your listing title should highlight what makes your place special.
            </span>
            <span className="text-start font-medium underline tracking-[0.1rem]">
              Review listing title guidelines.
            </span>
          </div>
          <textarea
            type="text"
            maxLength={maxLength}
            rows={4}
            onChange={(e) => setCount(e.target.value.length)}
            className="px-7 py-4 w-[100%] h-[20rem] text-[2rem] bg-white border-gray flex justify-center items-center flex-col border-2 rounded-lg  hover:border-black  focus:border-black focus-visible:border-black"
          ></textarea>
          <p className="text-[.95rem] mt-4">
            {count}/{maxLength}
          </p>
        </div>
        <BottomMenu
          back={'/create-host/photos/123'}
          next={'/create-host/description/123'}
        />
      </div>
    </div>
  );
}
export default TitleContainer;
