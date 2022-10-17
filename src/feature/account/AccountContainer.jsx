function AccountContainer() {
	return (
		<div className='mx-[5rem]'>
			<div className='mt-[1rem] text-left flex gap-2 text-gray-400'>
				<span>Account</span>
				<i className='fa-solid fa-chevron-right mt-[0.3rem]'></i>
				<span>Personal info</span>
			</div>
			<div className=' text-left text-[2rem] font-bold'>Personal info</div>
			<div>
				<div className='mt-[1.8rem] flex justify-between'>
					{/* table 1 */}
					<div>
						<div className='w-[37.5rem] flex'>
							<div>
								<div>
									<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
										Legal Name
									</div>
									<div className='text-left text-gray-400 w-[31.25rem]'>
										Chutimun torntranon
									</div>
								</div>
							</div>
							<div className='w-[6.25rem] mt-[1.813rem]'>
								<button className='hover:underline'>edit</button>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* table 2 */}
						<div>
							<div className='w-[37.5rem] flex mt-[0.313rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Gender
										</div>
										<div className='text-left text-gray-400 w-[31.25rem]'>
											Not specified
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									<button className='hover:underline'>edit</button>
								</div>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* table 3 */}
						<div className='mt-[0.313rem]'>
							<div className='w-[37.5rem] flex mt-[0.938rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Email address
										</div>
										<div className='text-left text-gray-400 w-[31.25rem]'>
											j***2@outlook.co.th
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									<button className='hover:underline'>edit</button>
								</div>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* table 4  */}
						<div className='mt-[-0.938rem]'>
							<div className='w-[37.5rem] flex mt-[0.938rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Phone numbers
										</div>
										<div className='text-left text-gray-400 w-[31.25rem]'>
											Add a number so confirmed guests and Airbnb can get in
											touch. You can add other numbers and choose how they’re
											used
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.875rem]'>
									<button className='hover:underline'>Add</button>
								</div>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* table 5 */}
						<div className='mt-[-0.938rem]'>
							<div className='w-[37.5rem] flex mt-[0.938rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Government ID
										</div>
										<div className='text-left text-gray-400 w-[31.25rem]'>
											Not provided
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									<button className='hover:underline'>Add</button>
								</div>
							</div>
						</div>
						<hr className='mt-[2rem]'></hr>
						{/* table 6 */}
						<div className='mt-[1rem]'>
							<div className='w-[38rem] flex mt-[1rem]'>
								<div>
									<div>
										<div className='mt-[2rem] text-left  w-[31rem]'>
											Address
										</div>
										<div className='text-left text-gray-400 w-[31rem]'>
											Not provided
										</div>
									</div>
								</div>
								<div className='w-[6rem] mt-[2rem]'>
									<button className='hover:underline'>Edit</button>
								</div>
							</div>
						</div>
						<hr className='mt-[2rem]'></hr>
						{/* table 7 */}
						<div className='mt-[1rem]'>
							<div className='w-[38rem] flex mt-[1rem]'>
								<div>
									<div>
										<div className='mt-[2rem] text-left  w-[31rem]'>
											Emergency contact
										</div>
										<div className='text-left text-gray-400 w-[31rem]'>
											Not provided
										</div>
									</div>
								</div>
								<div className='w-[6rem] mt-[2rem]'>
									<button className='hover:underline'>Add</button>
								</div>
							</div>
						</div>
						<hr className='mt-[2rem]'></hr>
						{/* table 8 */}
						<div className='mt-[1rem]'>
							<div className='w-[37.5rem] flex mt-[0.938rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Password
										</div>
										<div className='text-left text-gray-400 w-[31.25rem]'>
											Last updated 18 hours ago
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem] text-green-600'>
									<a className='hover:underline cursor-pointer'>Update</a>
								</div>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* table 9 */}
						<div className='mt-[-0.938rem]'>
							<div className='w-[37.5rem] flex mt-[0.938rem]'>
								<div>
									<div>
										<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
											Deactivate your account
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									<button className='text-red-500 hover:underline cursor-pointer'>
										Deactivate
									</button>
								</div>
							</div>
						</div>
						<hr className='mt-[1.875rem]'></hr>
						{/* end table */}
					</div>
					<div>
						{/* table 1 */}
						<div className='w-[25rem] border rounded-xl'>
							<div className='flex start mt-[1.25rem] ml-[1.875rem]'>
								<i className='fa-solid fa-user-lock text-[3.125rem] ml-[1.25rem]'></i>
							</div>
							<div className='mt-[0.625rem] text-[1.25rem] font-bold text-opacity-10 w-[18.75rem] text-left mx-auto'>
								<p>
									Why isn’t my info shown <br></br>
									here?
								</p>
							</div>
							<div className='mt-[0.625rem] text-[1rem] w-[18.75rem] text-left mx-auto text-gray-400'>
								<p>
									We’re hiding some account details to protect your identity.
								</p>
							</div>
							<hr className='mt-[1.875rem] w-[18.75rem] mx-auto'></hr>
							{/* table 2 */}
							<div className='flex start mt-[1.25rem] ml-[1.875rem]'>
								<i className='fa-solid fa-lock text-[3.125rem] ml-[1.25rem]'></i>
							</div>
							<div className='mt-[0.625rem] text-[1.25rem] font-bold text-opacity-10 w-[18.75rem] text-left mx-auto'>
								<p>Which details can be edited?</p>
							</div>
							<div className='mt-[0.625rem] text-[1rem] w-[18.75rem] text-left mx-auto text-gray-400'>
								<p>
									Details Airbnb uses to verify your identity can’t be changed.
									Contact info and some personal details can be edited, but we
									may ask you verify your identity the next time you book or
									create a listing.
								</p>
							</div>
							<hr className='mt-[1.875rem] w-[18.75rem] mx-auto'></hr>
							{/* table 3 */}
							<div className='flex start mt-[1.25rem] ml-[1.875rem]'>
								<i className='fa-regular fa-eye text-[3.125rem] ml-[1.25rem]'></i>
							</div>
							<div className='mt-[0.625rem] text-[1.25rem] font-bold text-opacity-10 w-[18.75rem] text-left mx-auto'>
								<p>What info is shared with others?</p>
							</div>
							<div className='mt-[0.625rem] text-[1rem] w-[18.75rem] text-left mx-auto text-gray-400 mb-[1.875rem]'>
								<p>
									Airbnb only releases contact information for Hosts and guests
									after a reservation is confirmed.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccountContainer;
