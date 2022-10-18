function ReserveComponent() {
	return (
		<div className='border w-[18rem] mt-[1rem] shadow-2xl'>
			<div className='w-[15rem] flex mx-auto mt-[1rem] justify-between'>
				<h1 className='text-xl'>$3,764</h1>
				<div className='font-light mt-[0.1rem]'>night</div>
				<i className='fa-solid fa-star mt-[0.3rem] ml-[1rem]'></i>
				<div className='text-sm ml-[0.1rem] mt-[0.3rem]'> 4.67</div>
				<div className='text-sm mt-[0.3rem] ml-[0.5rem] text-gray-400 underline'>
					6 reviews
				</div>
			</div>
			<div className='w-[15rem] h-[3.5rem] mx-auto mt-[1rem] flex flex-grow'>
				<div className='p-2 border w-[7.5rem] h-[3.5rem] flex-1 rounded-tl-md'>
					<div className='text-[0.6rem] font-bold  mt-[0.25rem] ml-[0.5rem]'>
						CHECK-IN
					</div>
					<div className='font-light text-[0.8rem] ml-[0.5rem]'>10/17/2022</div>
				</div>
				<div className='p-2 border w-[7.5rem] h-[3.5rem] flex-1 rounded-tr-md'>
					<div className='text-[0.6rem] font-bold  mt-[0.25rem] ml-[0.5rem]'>
						CHECKOUT
					</div>
					<div className='font-light text-[0.8rem] ml-[0.5rem]'>10/22/2022</div>
				</div>
			</div>
			<div className='w-[15rem] border mx-auto p-2 rounded-br-md rounded-bl-md'>
				<div className='text-[0.7rem] mx-auto font-bold ml-[0.5rem]'>
					GUESTS
				</div>
				<div className='font-light text-[0.8rem] ml-[0.5rem]'>
					1 guest
					<i className='fa-solid fa-chevron-down ml-[9rem] mt-[-0.9rem]'></i>
				</div>
			</div>
			<div className='w-[15rem] mx-auto mt-[1rem]'>
				<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem]'>
					Reserve
				</button>
			</div>
			<div className='w-[15rem] mx-auto mt-[1rem] flex justify-between'>
				<div className='underline'>$3,270 x 5 nights</div>
				<div>$16,352</div>
			</div>
			<div className='w-[15rem] mx-auto mt-[1rem] flex justify-between'>
				<div className='underline'>Service fee</div>
				<div>$2,470</div>
			</div>
			<hr className='mt-[2rem] w-[15rem] mx-auto'></hr>
			<div className='w-[15rem] mx-auto mt-[1.5rem] flex justify-between mb-[1.5rem] font-bold'>
				<div>Total before taxes</div>
				<div>$18,822</div>
			</div>
		</div>
	);
}

export default ReserveComponent;
