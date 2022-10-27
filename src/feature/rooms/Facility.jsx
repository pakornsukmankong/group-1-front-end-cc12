function Facility({ item }) {
	// console.log(item, 'item');
	return (
		<div className='flex gap-4  '>
			{/* <img src='' alt=''/> */}
			<div className='flex gap-3 items-center text-lg pl-2'>
				<div className='w-[20px]'>
					<i className={item?.Facility.facilityIconImage}></i>
				</div>
				<p className='font-light'>{item?.Facility.facilityName}</p>
			</div>
		</div>
	);
}

export default Facility;
