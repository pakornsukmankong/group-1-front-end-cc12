import { Link } from 'react-router-dom'

function HostingEntire() {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-pink-700 min-w-full h-[30vh] text-sm leading-5 py-16">
      <div className="px-[16%] flex flex-col justify-between  gap-5">
        <div className="flex items-center justify-between ">
          <span className="text-white text-[2rem] font-semibold leading-9">
            Today
          </span>
          <Link to="/becomeHosting">
            <div className="bg-white w-[10.8125rem] h-[2.125rem] rounded-lg font-semibold py-4 px-2 text-sm text-center align-middle flex flex-col justify-center">
              <div>Complete your listing</div>
            </div>
          </Link>
        </div>
        <div>
          <span className="text-base text-white">
            You’ll be a Host soon! Just add the last few details to your
            listing.
          </span>
        </div>
      </div>
    </div>
  )
}

export default HostingEntire
