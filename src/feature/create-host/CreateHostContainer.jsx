import { Link } from 'react-router-dom';

function CreateHostContainer() {
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
            src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="basis-2/4 bg-black flex flex-col justify-between">
        <div className="pt-8 px-12 flex justify-end">
          <Link
            to={'/becomeHosting'}
            className="px-4 py-2  font-light text-xs bg-gray-800 text-gray-300 rounded-full shadow-sm"
          >
            Exit
          </Link>
        </div>
        <div className=" text-white px-5 text-center">
          <h1 className="text-[2.8rem] p-12 font-bold tracking-[0.18rem]">
            Become a Host in 10 easy steps
          </h1>
          <span className="text-[1.2rem]">
            Join us. We'll help you every step of the way.
          </span>
        </div>
        <div className="flex justify-end border-t border-t-slate-800 py-4 pr-12">
          <Link
            to={'/create-host/property-type-group'}
            className="px-5 py-3 font-semibold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded shadow-sm bt-let-go"
          >
            Let's go!
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CreateHostContainer;
