import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increase,
	decrease,
	increase1,
	decrease1,
} from '../../store/AdultsChildCounter';

function ReserveComponent() {
	const [input, setInput] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.adultsCount);
	const count2 = useSelector((state) => state.counter.childrenCount2);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='border w-[18rem] mt-[1rem] shadow-2xl rounded-xl'>
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
					{/* calender */}
					<form className='w-[7rem] text-left text-[0.7rem]'>
						<div className='nativeDatePicker'>
							<label htmlFor='bday' className='font-bold'>
								CHECK-IN
							</label>
							<br></br>
							<input
								className='cursor-pointer'
								type='date'
								id='bday'
								name='bday'
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>
					</form>
					{/* <div className='text-[0.6rem] font-bold  mt-[0.25rem] ml-[0.5rem]'>
						<button>CHECK-IN</button>
					</div>
					<div className='font-light text-[0.8rem] ml-[0.5rem]'>10/17/2022</div> */}
				</div>
				<div className='p-2 border w-[7.5rem] h-[3.5rem] flex-1 rounded-tr-md'>
					<form className='w-[7rem] text-left text-[0.7rem]'>
						<div className='nativeDatePicker'>
							<label htmlFor='checkout' className='font-bold'>
								CHECKOUT
							</label>
							<br></br>
							<input
								className='cursor-pointer'
								type='date'
								id='checkout'
								name='checkout'
								onChange={(e) => setInput(e.target.value)}
							/>
							{console.log(input)}
						</div>
					</form>
				</div>
			</div>
			<div
				className='w-[15rem] border mx-auto p-2 rounded-br-md rounded-bl-md'
				onClick={handleClick}
			>
				<div className='text-[0.7rem] mx-auto font-bold ml-[0.5rem]'>
					GUESTS
				</div>
				<div className='font-light text-[0.8rem] ml-[0.5rem]'>
					{count + count2} guest
					<i className='fa-solid fa-chevron-down ml-[9rem] mt-[-0.9rem]'></i>
				</div>
				{/* setShow */}
			</div>
			<div
				className={`${
					isOpen
						? 'absolute block w-[15.2rem] h-[16.6rem] bg-white mx-auto z-[500] ml-[1.25rem] rounded-xl shadow-xl'
						: 'hidden'
				}`}
			>
				<div className='border-b w-[15.1rem] p-5 mt-[0rem] mx-auto rounded-xl shadow-2xl '>
					{/* table 1 */}
					<div className='flex flex-row'>
						<div className='flex flex-col'>
							<div className='w-[8rem]'>Adults</div>
							<div className='w-[8rem] text-sm text-gray-500'>Age 13+</div>
						</div>
						<div className='flex flex-row w-[6rem] ml-[-1.6rem]'>
							<button
								onClick={() => dispatch(decrease())}
								className='border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black'
							>
								-
							</button>
							<div className='w-[2rem] text-center mt-[0.7rem]'>{count}</div>
							<button
								onClick={() => dispatch(increase())}
								className='border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black'
							>
								+
							</button>
						</div>
					</div>
					{/* table 2 */}
					<div className='flex flex-row mt-[1rem]'>
						<div className='flex flex-col'>
							<div className='w-[8rem]'>Children</div>
							<div className='w-[8rem] text-sm text-gray-500'>Ages 2-12</div>
						</div>
						<div className='flex flex-row w-[10rem] ml-[-1.6rem]'>
							<button
								onClick={() => dispatch(decrease1())}
								className='border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black'
							>
								-
							</button>
							<div className='w-[2rem] text-center mt-[0.7rem]'>{count2}</div>
							<button
								onClick={() => dispatch(increase1())}
								className='border  w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black'
							>
								+
							</button>
						</div>
					</div>
					{/* table 3  */}
					<div className='flex flex-row mt-[1rem]'>
						<div className='text-[0.8rem] font-light'>
							This place has a maximum of 4 guests, not including infants. Pets
							aren't allowed.
						</div>
					</div>
					{/* table 4 */}
					<div className='p-3 flex underline'>
						<button className='ml-[9rem]'>Close</button>
					</div>
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
			<div></div>
		</div>
	);
}

export default ReserveComponent;
