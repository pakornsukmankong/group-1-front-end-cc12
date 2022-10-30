import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function BecomeHostEntire() {
	const { user } = useAuth();

	return (
		<div className='flex h-[75vh]'>
			<div className='w-1/2 flex flex-col bg-black items-center justify-center'>
				<span className='text-6xl font-bold text-white text-center '>
					Open your door <br />
					to hosting
				</span>
				{user ? (
					<Link to='/create-host/intro'>
						<button
							type='button'
							className='bg-pink-500 text-sm  text-white w-[130px] h-[48px] rounded-lg mt-[50px]'
						>
							Try hosting
						</button>
					</Link>
				) : (
					''
				)}
			</div>
			<div className='w-1/2 overflow-hidden'>
				<video controls autoPlay muted>
					<source
						src='https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265'
						type='video/mp4'
					/>
				</video>
			</div>
		</div>
	);
}

export default BecomeHostEntire;
