import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import EditEmailForm from './EditEmailForm';
import EditGenderForm from './EditGenderForm';
import EditNameForm from './EditNameForm';
import EditPasswordFrom from './EditPasswordFrom';
import EditPhoneForm from './EditPhoneForm';

function AccountContainer() {
	const { user } = useAuth();
	const { firstName, lastName, phone, email, gender } = user;

	const [isEditName, setIsEditName] = useState(false);
	const [isEditEmail, setIsEditEmail] = useState(false);
	const [isEditPhone, setIsEditPhone] = useState(false);
	const [isEditGender, setIsEditGender] = useState(false);
	const [isEditPassword, setIsEditPassword] = useState(false);

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
								<div className='mt-[1.875rem] text-left  w-[31.25rem]'>
									Legal Name
								</div>
								<div className='text-left text-gray-400 w-[31.25rem]'>
									{firstName} {lastName}
								</div>
							</div>
							<div className='w-[6.25rem] mt-[1.813rem]'>
								{isEditName ? (
									<>
										<button
											className='hover:underline'
											onClick={() => setIsEditName(false)}
										>
											cancel
										</button>
										<EditNameForm
											clostEditNameForm={() => setIsEditName(false)}
										/>
									</>
								) : (
									<button
										className='hover:underline'
										onClick={() => setIsEditName(true)}
									>
										edit
									</button>
								)}
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
											{gender ? gender : 'Not Specified'}
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									{isEditGender ? (
										<>
											<button
												className='hover:underline'
												onClick={() => setIsEditGender(false)}
											>
												cancel
											</button>
											<EditGenderForm
												clostEditGenderForm={() => setIsEditGender(false)}
											/>
										</>
									) : (
										<button
											className='hover:underline'
											onClick={() => setIsEditGender(true)}
										>
											edit
										</button>
									)}
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
											{email}
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									{isEditEmail ? (
										<>
											<button
												className='hover:underline'
												onClick={() => setIsEditEmail(false)}
											>
												cancel
											</button>
											<EditEmailForm
												clostEditEmailForm={() => setIsEditEmail(false)}
											/>
										</>
									) : (
										<button
											className='hover:underline'
											onClick={() => setIsEditEmail(true)}
										>
											edit
										</button>
									)}
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
											{phone || 'No phone number'}
										</div>
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.875rem]'>
									{isEditPhone ? (
										<>
											<button
												className='hover:underline'
												onClick={() => setIsEditPhone(false)}
											>
												cancel
											</button>
											<EditPhoneForm
												clostEditPhoneForm={() => setIsEditPhone(false)}
											/>
										</>
									) : (
										<button
											className='hover:underline'
											onClick={() => setIsEditPhone(true)}
										>
											edit
										</button>
									)}
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
										{isEditPassword ? (
											<EditPasswordFrom
												clostEditPasswordForm={() => setIsEditPassword(false)}
											/>
										) : (
											<div className='text-left text-gray-400 w-[31.25rem]'>
												{/* Last updated 18 hours ago */}
											</div>
										)}
									</div>
								</div>
								<div className='w-[6.25rem] mt-[1.813rem]'>
									{isEditPassword ? (
										<>
											<button
												className='hover:underline cursor-pointer'
												onClick={() => setIsEditPassword(false)}
											>
												cancel
											</button>
										</>
									) : (
										<button
											className='hover:underline cursor-pointer'
											onClick={() => setIsEditPassword(true)}
										>
											Update
										</button>
									)}
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
