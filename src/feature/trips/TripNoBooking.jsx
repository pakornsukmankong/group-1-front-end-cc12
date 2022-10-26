import { useNavigate } from 'react-router-dom';

function TripNoBooking() {
	const navigate = useNavigate();

	return (
		<>
			<div className='flex flex-col gap-5 py-7 border-b-2'>
				<div className='text-2xl'>No trips booked...yet!</div>
				<div className='font-light'>
					Time to dust off your bags and start planning your next adventure
				</div>
				<button
					className='w-max border-2 border-black rounded-lg py-2 px-5 hover:bg-gray-200'
					onClick={() => navigate('/')}
				>
					Start searching
				</button>
			</div>

			<div className='text-sm font-light mt-4'>
				Can't find your reservation here?{' '}
				<span className='font-normal underline'>Visit the Help Center</span>
			</div>
		</>
	);
}

export default TripNoBooking;
