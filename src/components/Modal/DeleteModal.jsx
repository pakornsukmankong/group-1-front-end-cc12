import { useAuth } from '../../contexts/AuthContext';

function DeleteModal({ closeDeleteUser }) {
	const { deleteUser } = useAuth();
	const handleOnClickDelete = async () => {
		try {
			await deleteUser();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-75 z-40'>
			<div className='flex justify-center items-center h-full'>
				<div className='flex flex-col bg-white w-[450px] h-[190px] rounded-lg justify-items-center'>
					<button className=' w-[350px] mt-3 ml-[250px]'>
						<i
							className='fa-solid fa-xmark text-black'
							onClick={closeDeleteUser}
						></i>
					</button>
					<div className='mt-3 text-center'>
						<span className='text-xl font-bold mt-4 text-black '>
							Do you want to delete user ?
						</span>
						<span className='text-xl font-bold mt-4 text-red-500'></span>
					</div>
					<div className='mt-5 gap-5 flex justify-center'>
						<div>
							<button
								className='bg-blue-700 w-[100px] h-[40px] text-slate-100 text-m font-bold border-2 border-sky-600 rounded-xl'
								onClick={handleOnClickDelete}
							>
								Confirm
							</button>
						</div>
						<div>
							<button
								className='bg-zinc-100 w-[100px] h-[40px] border-2 border-slate-500 rounded-xl text-m font-bold'
								onClick={closeDeleteUser}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
