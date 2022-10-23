import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function EditEmailForm({ clostEditEmailForm }) {
	const { user, updateAccountUser } = useAuth();
	const { startLoading, stopLoading } = useLoading();

	const [email, setEmail] = useState(user.email);

	const handleClickUpdateEmail = async () => {
		try {
			startLoading();
			await updateAccountUser({ email });
			clostEditEmailForm();
			stopLoading();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='absolute left-[10rem]'>
			<div className='flex justify-center items-center gap-5'>
				<input
					type='text'
					id='email'
					className='p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className='px-5 py-2 mb-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
					onClick={handleClickUpdateEmail}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default EditEmailForm;
