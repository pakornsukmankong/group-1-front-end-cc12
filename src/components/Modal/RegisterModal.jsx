import { useState } from 'react';

function RegisterModal({ openModalOtp, closeModalRegis }) {
	const [logEmail, setlogEmail] = useState(false);
	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	// console.log(input);

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClickBack = () => {
		closeModalRegis();
		openModalOtp();
	};

	const handleClickRegister = () => {
		closeModalRegis();
	};

	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 leading-5'>
			<div className='flex flex-col justify-center items-center h-full'>
				<div className='relative w-[568px] h-[4rem] px-6 bg-white rounded-t-xl flex justify-center items-center font-extrabold border border-b-gray-300 text-base'>
					<i
						className='absolute left-6 fa-solid fa-angle-left rounded-full text-lg'
						onClick={handleClickBack}
					></i>
					<div className='flex justify-center'> Finish Signing Up</div>
				</div>
				<div className='w-[568px] h-[700px] px-6 bg-white rounded-b-xl flex flex-col'>
					<div>
						<div className='mt-5 w-full'>
							<input
								type='text'
								className='pl-3 border border-t-gray-300  border-b-0 h-[3.5rem] rounded-t-lg  w-full '
								placeholder='First name'
								name='firstName'
								value={input.firstName}
								onChange={handleChangeInput}
							/>
							<input
								type='text'
								className='pl-3 border border-b-gray-300 h-[3.5rem] rounded-b-lg w-full '
								placeholder='Last name'
								name='lastName'
								value={input.lastName}
								onChange={handleChangeInput}
							/>
						</div>
						<div className='mt-2 text-xs text-gray-500'>
							Make sure it matches the name on your government ID.
						</div>
						<div className='relative'>
							<input
								type='date'
								className='mt-5 pl-3 border border-gray-300 h-[3.5rem] rounded-lg  w-full font-light'
								placeholder='Birthdate'
							/>
							<span className='absolute top-6 left-3 text-xs text-gray-400'>
								Birthdate
							</span>
							<div className='mt-2 text-xs text-gray-500'>
								To sign up, you need to be at least 18. Your birthday won't be
								shared with other people who use Airbnb.
							</div>
						</div>
						<div>
							<div className='relative'>
								<input
									type='text'
									className='relative mt-5 pl-3 border border-gray-300 h-[3.5rem] rounded-lg  w-full font-light'
									placeholder='Email'
									name='email'
									value={input.email}
									onChange={handleChangeInput}
								/>
								<span className='absolute top-6 left-3 text-xs text-gray-400'>
									Email
								</span>
							</div>
							<div className='mt-2 text-xs text-gray-500'>
								We'll email you trip confirmations and receipts.
							</div>
						</div>

						<div className='relative'>
							<input
								type='text'
								className='mt-5 pl-3 border border-gray-300 h-[3.5rem] rounded-lg  w-full font-light'
								placeholder='Password'
								name='password'
								value={input.password}
								onChange={handleChangeInput}
							/>
							<span className='absolute top-[2.3rem] right-4 text-sm underline cursor-pointer'>
								Show
							</span>
						</div>
						<div className='my-2 text-xs text-gray-500'>
							By selecting
							<span className='font-bold'> Agree and continue</span>, I agree to
							Airbnb's &nbsp;
							<span className='text-blue-600 underline'>
								Terms of Service, Payments Terms of Service
							</span>
							, and &nbsp;
							<span className='text-blue-600 underline'>
								Nondiscrimination Policy
							</span>
							and acknowledge the &nbsp;
							<span className='text-blue-600 underline'>Privacy Policy.</span>
						</div>
						<button
							className='my-5 min-w-full h-12 text-base  flex items-center justify-center text-white rounded-lg bg-[#FF385C] hover:bg-[#ff0532]'
							onClick={handleClickRegister}
						>
							Agree and continue
						</button>
						<div className='my-3 '>
							<hr className='block' />
						</div>
						<div className='mt-5 flex flex-col justify-around gap-4'>
							<div className='text-[11px] leading-[14px] text-gray-500'>
								Airbnb will send you members-only deals, inspiration, marketing
								emails, and push notifications. You can opt out of receiving
								these at any time in your account settings or directly from the
								marketing notification.
							</div>

							<div className='flex items-center'>
								<input
									type='checkbox'
									value=''
									className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									htmlFor='link-checkbox'
									className='ml-2 text-xs font-light '
								>
									I don't want to receive marketing messages from Airbnb.
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RegisterModal;
