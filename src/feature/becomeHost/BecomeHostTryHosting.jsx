function BecomeHostTryHosting() {
	return (
		<div className='flex mt-24 h-[115vh] overflow-hidden'>
			<div className='w-1/2'>
				<video controls autoPlay muted>
					<source
						src='https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265'
						type='video/mp4'
					/>
				</video>
			</div>
			<div className='bg-black text-white w-1/2  flex flex-col justify-center items-center text-center'>
				<div className=' text-6xl font-semibold pb-[25px]'>
					Try hosting on <br /> AirBnb
				</div>
				<div className='pb-[50px]'>
					Join us. We'll help you every <br /> step of the ways
				</div>
				<button className='bg-pink-bnb w-[100px] h-[48px] font-semibold rounded-md'>
					Let's go
				</button>
			</div>
		</div>
	);
}

export default BecomeHostTryHosting;
