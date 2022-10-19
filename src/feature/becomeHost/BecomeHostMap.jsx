function BecomeHostMap() {
	return (
		<div className='mt-[110px]'>
			<div className='text-center mb-[40px]'>
				<span className='text-5xl font-semibold'>
					Find out what you <br />
					could earn as a Host
				</span>
			</div>

			<div className='px-5 flex justify-center gap-4 '>
				<div className='bg-stone-100 w-[324px] h-[102px] pl-[20px] flex flex-col justify-center rounded-xl'>
					<span className='text-sm text-zinc-400'>
						Hosts in your area earn an average of*
					</span>
					<h1 className='text-pink-bnb font-bold text-4xl'>
						฿31,210<span className='font-semibold text-xl'>/ month</span>
					</h1>
				</div>
				<div className='bg-stone-100 w-[324px] h-[102px] pl-[20px] flex flex-col justify-center rounded-xl'>
					<span className='text-sm text-zinc-400'>They earn</span>
					<h1 className='font-bold text-4xl'>
						฿1,486<span className='font-semibold text-xl'>/ night</span>
					</h1>
				</div>
				<div className='bg-stone-100 w-[324px] h-[102px] pl-[20px] flex flex-col justify-center rounded-xl'>
					<span className='text-sm text-zinc-400'>They're booked</span>
					<h1 className='font-bold text-4xl'>
						21 nights<span className='font-semibold text-xl'>/ month</span>
					</h1>
				</div>
			</div>

			<div>
				<div className='text-center font-semibold text-2xl mt-[60px] mb-[20px]'>
					Tell us about your place
				</div>
				<div>{/* Google Map */}Google Map</div>
				<div className='mt-[30px] text-center underline font-normal'>
					*Learn how we estimate your earnings
				</div>
			</div>
		</div>
	);
}

export default BecomeHostMap;
