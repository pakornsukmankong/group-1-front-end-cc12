import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOutOtp } from '../../store/AuthSlice';
import PhoneAuthModal from './PhoneAuthModal';

function LoginRegisterModal({ closeModalOtp }) {
	const [logEmail, setlogEmail] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [modalVerify, setModalVerify] = useState(false);

	// const selectd = useSelector();
	const dispatch = useDispatch();

	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 leading-5'>
			<div className='flex flex-col justify-center items-center h-full'>
				<div className='relative w-[568px] h-[4rem] px-6 bg-white rounded-t-xl flex justify-center items-center font-extrabold text-base'>
					<i
						className='absolute left-6 fa-solid fa-xmark rounded-full text-lg cursor-pointer'
						onClick={() => closeModalOtp()}
					></i>
					<div className='flex justify-center'> Log in or Sign up</div>
					<hr />
				</div>
				<hr className='bg-gray-300' />
				<div className='w-[568px] h-[618px] px-6 bg-white rounded-b-xl flex flex-col'>
					<div className='my-5 font-bold text-2xl'>Welcome to Airbnb</div>

					<div className=' mb-3 border border-gray-300 h-[7.1rem] rounded-xl flex flex-col '>
						<div>
							<div className='  h-[3.5rem] flex flex-col justify-around rounded-xl  border-b-gray-300'>
								<span className='pl-5 text-sm font-normal text-gray-600 '>
									Country/Region
								</span>
								<div>
									<input
										type='text'
										disabled
										defaultValue='Thailand(+66)'
										placeholder='Thailand(+66)'
										className='pl-5 text-xl min-w-full min-h-full rounded-xl border-0 disabled text-gray-700 bg-white  '
									/>
								</div>
								<hr />
							</div>
							<div className='h-[3.5rem]'>
								<input
									type='text'
									name='phone'
									placeholder='Phone Number'
									className='pl-5 min-w-full min-h-full rounded-b-xl text-lg hover:border-2 hover:border-black hover:rounded-xl'
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
								/>
							</div>
							<div className='my-2 text-xs text-gray-300'>
								Well call or text you to confirm your number. Standard message
								and data rates apply.
								<a to='/' className='underline font-bold cursor-pointer'>
									Privacy Policy
								</a>
							</div>
							<button
								className='my-3 min-w-full h-12 text-base  flex items-center justify-center text-white rounded-lg bg-[#FF385C] hover:bg-[#ff0532]'
								onClick={() => {
									dispatch(sendOutOtp(phoneNumber));
								}}
							>
								Continue
							</button>
							<div className='my-3 flex flex-row items-center'>
								<hr className='block grow' />
								<div className='px-5 text-sm text-gray-600'>or</div>
								<hr className='block grow' />
							</div>
							<div className='flex flex-col justify-around gap-4'>
								<button className='min-w-full h-12 text-base  flex items-center justify-start gap-[9rem] border border-black rounded-lg hover:bg-gray-50 '>
									<i className=' ml-6 fa-brands fa-facebook-f text-blue-700 justify-self-start'></i>
									<span>Continue with Facebook</span>
								</button>
								<button className=' min-w-full h-12 text-base  flex items-center justify-start gap-[8rem]  border border-black rounded-lg  hover:bg-gray-50 '>
									<i className='ml-6 fa-brands fa-google text-red-700'></i>
									<span>Continue with Google</span>
								</button>

								<button className='min-w-full h-12 text-base  flex items-center justify-start gap-[8rem] border border-black rounded-lg hover:bg-gray-50 '>
									<i className='ml-6 fa-brands fa-apple text-xl'></i>
									<span>Continue with Apple</span>
								</button>
								<button
									className='min-w-full h-12 text-base  flex items-center justify-start gap-[8rem] border border-black rounded-lg hover:bg-gray-50 '
									onClick={() => setlogEmail(true)}
								>
									<i className='ml-6 fa-regular fa-envelope text-xl font-light'></i>
									<span>Continue with email</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>{modalVerify ? <PhoneAuthModal /> : ''}</div>
		</div>
	);
}
export default LoginRegisterModal;
