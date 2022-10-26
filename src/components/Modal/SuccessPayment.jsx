import { useNavigate } from 'react-router-dom'

function SuccessPayment({ Booking, charge }) {
  const navigate = useNavigate()
  const { email, name } = Booking
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 leading-5">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative w-[568px] h-[4rem] px-6 bg-white rounded-t-xl flex justify-center items-center font-extrabold border border-b-gray-300 text-base">
          <i className="absolute left-6 fa-solid fa-angle-left rounded-full text-lg"></i>
          <div className="flex justify-center">Payment Status</div>
        </div>
        <div className="w-[568px] h-[200px] px-6 bg-white flex flex-col justify-center ">
          <div className="mt-2 w-full flex flex-col justify-center items-center font-medium">
            <i className="fa-regular fa-circle-check text-green-500  text-5xl"></i>
            <div className="font-extrabold text-3xl text-green-500 text-center">
              {charge.status}
            </div>
            <br />
            <div className="text-center">
              Thank you for your Payment.
              <br />
              <p>
                email: {email} , customerName: {name}
              </p>
              <br />
              <p>
                Your Payment amount is {Booking.amount /100 || charge.amount} Baht
              </p>
            </div>
          </div>
        </div>
        <div className="w-[568px] h-[70px] px-6 bg-white border-t rounded-b-xl flex flex-col">
          <div className="flex justify-end">
            <button
              type="button"
              className="my-2 px-5 w-1/5 h-12 text-base flex items-center justify-center text-white rounded-lg bg-black hover:bg-gray-900"
              onClick={() => navigate('/')}
            >
              done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SuccessPayment
