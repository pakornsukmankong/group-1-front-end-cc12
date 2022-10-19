function BecomeHostAirCover() {
	return (
		<div className='px-[60px] mt-[70px]'>
			<div className='flex justify-between bg-air-cover pl-20 rounded-b-xl'>
				<div className='w-1/2 flex flex-col justify-center'>
					<div className='pb-16'>
						<h1 className='text-8xl font-bold'>
							<span className='text-pink-bnb'>air</span>cover
						</h1>
						<h2 className='text-4xl'>for Hosts</h2>
					</div>

					<div className='text-3xl font-normal'>
						Top-to-bottom protection.
						<br />
						Always included, always free.
						<br />
						Only on Airbnb
						<div className='mt-16 '>
							<button className='w-[133px] h-[48px] border-[1px] rounded-lg font-semibold text-base border-black'>
								Learn more
							</button>
						</div>
					</div>
				</div>

				<div>
					<img
						src='https://a0.muscache.com/im/pictures/f409b291-8b55-4780-81c3-a067062982d1.jpg?im_w=2560&im_q=highq'
						alt='sofa'
						className='h-[750px] w-[630px] '
					/>
				</div>
			</div>
		</div>
	);
}

export default BecomeHostAirCover;
