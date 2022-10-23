import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { toastError, toastSuccess } from '../../utils/toast';

function EditNameForm({ clostEditNameForm }) {
	const { user, updateAccountUser } = useAuth();
	const { startLoading, stopLoading } = useLoading();

	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);

	const handleClickUpdateName = async () => {
		try {
			startLoading();
			await updateAccountUser({ firstName, lastName });
			clostEditNameForm();
			stopLoading();
			toastSuccess('Update Legal Name Success');
		} catch (err) {
			console.log(err);
			toastError('Update Fail');
		}
	};
	return (
		<div className='absolute left-[10rem]'>
			<div className='flex justify-center items-center gap-5'>
				<input
					type='text'
					id='first_name'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type='text'
					id='last_name'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button
					className='px-5 py-2 mb-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
					onClick={handleClickUpdateName}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default EditNameForm;
