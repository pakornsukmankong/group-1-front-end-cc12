import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toastError, toastSuccess } from '../../utils/toast';

function EditGenderForm({ clostEditGenderForm }) {
	const { updateAccountUser } = useAuth();
	const { startLoading, stopLoading } = useLoading();

	const [gender, setGender] = useState(null);

	const handleClickUpdateGender = async () => {
		try {
			startLoading();
			await updateAccountUser({ gender });
			clostEditGenderForm();
			stopLoading();
			toastSuccess('Update Gender Success');
		} catch (err) {
			console.log(err);
			toastError('Update Gender Fail');
		}
	};

	return (
		<div className='absolute left-[10rem]'>
			<div className='flex justify-center items-center gap-5'>
				<select
					id='gender'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					onChange={(e) => setGender(e.target.value)}
				>
					<option defaultValue>Select Gender</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Not specified'>Not specified</option>
				</select>
				<button
					className='px-5 py-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
					onClick={handleClickUpdateGender}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default EditGenderForm;
