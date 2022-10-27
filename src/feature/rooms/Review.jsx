import Avatar from '../../components/Avatar';

function Review({ item }) {
	// console.log(item);
	return (
		<div className='flex flex-col border-2 rounded-xl p-3'>
			<div className='flex items-center mb-2'>
				<Avatar hSize='h-10' wSize='w-10' />
				<div className='ml-3'>
					<p className='font-medium'>
						{item?.User.firstName} {item?.User.lastName}
					</p>
					{/* <p className='font-thin text-sm'>20 min ago</p> */}
				</div>
			</div>
			<div className='font-light'>{item?.comment}</div>
		</div>
	);
}

export default Review;
