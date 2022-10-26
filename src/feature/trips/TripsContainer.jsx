import { useBooking } from '../../contexts/BookingContext';
import TripNoBooking from './TripNoBooking';
import TripsItem from './TripsItem';

function TripsContainer() {
	const { userBooking } = useBooking();
	console.log(userBooking, 'userBooking');
	const mockData = [
		{
			id: 1,
			propertyImage: [
				'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
			],
		},
		{
			id: 2,
			propertyImage: [
				'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
			],
		},
		{
			id: 3,
			propertyImage: [
				'https://a0.muscache.com/im/pictures/9b65da9a-fcc9-4852-a1c4-d438731c23bd.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/517079c7-bbfa-40e7-93fd-f6d39c5ef7e0.jpg?im_w=1200',
				'https://a0.muscache.com/im/pictures/f42f8a15-37a2-4e98-a852-3aea43a16a0d.jpg?im_w=1200',
			],
		},
	];

	return (
		<>
			<div className='mx-[5rem]'>
				<div className='text-[2rem] mt-[1rem] pb-5 border-b-2'>
					<h1 className='my-auto'>Trips</h1>
				</div>

				{userBooking ? (
					<div className='grid grid-cols-1 gap-10 mt-5 md:grid-cols-3'>
						{userBooking?.map((item) => (
							<TripsItem key={item.id} item={item} />
						))}
					</div>
				) : (
					<>
						<TripNoBooking />
					</>
				)}
			</div>
		</>
	);
}

export default TripsContainer;
