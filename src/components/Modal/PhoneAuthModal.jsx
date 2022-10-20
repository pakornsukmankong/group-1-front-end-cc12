import { useState } from 'react';
import { verifyOtp } from '../../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

function PhoneAuthModal({
	closeModalVerify,
	openModalOtp,
	user,
	openModalRegis,
}) {
	const [valueOtp, setValueOtp] = useState('');
	const dispatch = useDispatch();

	const initialPhoneNumber = useSelector((state) => {
		return state.auth.phoneNumber;
	});

	const handleOnClickBack = () => {
		closeModalVerify();
		openModalOtp();
	};

	console.log(initialPhoneNumber);

	const handleClickVerifyOtp = async () => {
		try {
			await dispatch(verifyOtp(initialPhoneNumber, valueOtp));
			closeModalVerify();
			openModalRegis();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 leading-5'>
			<div className='flex flex-col justify-center items-center h-full'>
				<div className='relative w-[568px] h-[4rem] px-6 bg-white rounded-t-xl flex justify-center items-center font-extrabold border border-b-gray-300 text-base'>
					<i
						className='absolute left-6 fa-solid fa-angle-left rounded-full text-lg cursor-pointer'
						onClick={handleOnClickBack}
					></i>
					<div className='flex justify-center'>Confirm your number</div>
				</div>
				<div className='w-[568px] h-[160px] px-6 bg-white flex flex-col'>
					<div className='mt-2 w-full'>
						<div className='mt-6 text-base text-gray-500 font-light'>
							Enter the code we sent over SMS to +66 85XXXXXXX:
						</div>
						<input
							type='text'
							className='mt-3 border w-1/3 border-gray-300   h-[3.5rem] rounded-lg  text-5xl '
							placeholder=''
							onChange={(e) => setValueOtp(e.target.value)}
						/>
					</div>
				</div>
				<div className='w-[568px] h-[70px] px-6 bg-white border-t rounded-b-xl flex flex-col'>
					<div className='flex justify-end'>
						<button
							className='my-2 px-5 w-1/5 h-12 text-base flex items-center justify-center text-white rounded-lg bg-black hover:bg-gray-900'
							onClick={handleClickVerifyOtp}
						>
							continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PhoneAuthModal;
