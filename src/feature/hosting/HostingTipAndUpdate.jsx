import React from 'react';

function HostingTipAndUpdate() {
	return (
		<div className='bg-black w-full h-[55vh] flex justify-center items-center'>
			<div className='px-12'>
				<h1 className='text-white text-3xl font-semibold mb-6 pl-1'>
					Hosting tips & updates
				</h1>
				{/* Pic 1 */}
				<div className='flex gap-4 p-2 '>
					<div className='w-[16vw] h-[330px] rounded-xl overflow-hidden bg-stone-bg'>
						<img
							src='https://a0.muscache.com/im/pictures/3c930824-3462-40c4-afc2-19d5ef019594.jpg?im_w=320'
							alt='pic1'
						/>
						<div className='flex justify-center items-center h-[100px]'>
							<h1 className='font-bold text-white'>
								How to make your listing <br />
								stand out
							</h1>
						</div>
					</div>
					{/* Pic 2 */}
					<div className='w-[16vw] h-[330px] rounded-xl overflow-hidden bg-stone-bg'>
						<img
							src='https://a0.muscache.com/im/pictures/1caeb016-a2ad-4c00-86a3-4cafc77431e0.jpg?im_w=320'
							alt='pic2'
						/>
						<div className='flex justify-center items-center h-[100px]'>
							<h1 className='font-bold text-white'>
								Sprucing up your listing <br />
								description
							</h1>
						</div>
					</div>
					{/* Pic 3 */}
					<div className='w-[16vw] h-[330px] rounded-xl overflow-hidden bg-stone-bg'>
						<img
							src='https://a0.muscache.com/im/pictures/c6b34a30-9190-4915-a746-ebb986309044.jpg?im_w=320'
							alt='pic3'
						/>
						<div className='flex justify-center items-center h-[100px]'>
							<h1 className='font-bold text-white'>
								Upderstanding calender and <br />
								booking settings
							</h1>
						</div>
					</div>
					{/* Pic 4 */}
					<div className='w-[16vw] h-[330px] rounded-xl overflow-hidden bg-stone-bg'>
						<img
							src='https://a0.muscache.com/im/pictures/c8c24577-9079-4af8-b64b-200feb855d33.jpg?im_w=320'
							alt='pic4'
						/>
						<div className='flex justify-center items-center h-[100px]'>
							<h1 className='font-bold text-white'>
								Create a guidebook to share <br />
								your local tips
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HostingTipAndUpdate;
