import { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../categories/Categories';
import CardRoomItem from './CardRoomItem';

function HomeContainer() {
	let dataMock = new Array(100).fill({
		roomTitle: 'Khaothong, Thailand',
		roomLocation: 'Khao Phanom Bencha National Park',
		roomOpen: 'Oct 27 – Nov 1',
		roomPrice: '฿8,331',

		roomRate: '4.75',

		imageList: [
			'https://a0.muscache.com/im/pictures/ade75bc6-9a2a-453f-9d6d-b7919ff7bd4a.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/f255c96c-a0f0-44f0-a975-fcb63ec74e71.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/70bca335-129b-4a83-bfe0-6a8c52baf448.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/4abb7e2c-ad31-4f84-a36a-40e1a8b15084.jpg?im_w=720',
			'https://a0.muscache.com/im/pictures/ffadcfe3-75de-4c1d-b94c-2c609bf96c38.jpg?im_w=720',
		],
	});

	const [rooms, setRooms] = useState(dataMock);

	return (
		<>
			<div className='sticky top-20 left-0 right-0 z-[5]'>
				<Categories />
			</div>
			<main className='my-5'>
				<div className='grid gap-x-7 gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{rooms.map((item, keys) => {
						return <CardRoomItem key={keys} dataItem={item} />;
					})}
				</div>
			</main>
		</>
	);
}

export default HomeContainer;
