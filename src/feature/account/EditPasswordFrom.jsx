import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { toastError, toastSuccess } from '../../utils/toast';

function EditPasswordFrom({ clostEditPasswordForm }) {
	const { user, updateAccountUser } = useAuth();
	const { startLoading, stopLoading } = useLoading();

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleClickUpdatePassword = async () => {
		try {
			startLoading();
			const res = await updateAccountUser({
				currentPassword,
				newPassword,
				confirmPassword,
			});
			console.log(res);
			await toastSuccess('Update Password Success');
			clostEditPasswordForm();
		} catch (err) {
			console.log(err);
			toastError('Update Password Error');
		} finally {
			stopLoading();
		}
	};
	return (
		<div className='flex flex-col gap-5 mt-2'>
			<input
				type='password'
				id='oldPassword'
				className='p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Current Password'
				onChange={(e) => setCurrentPassword(e.target.value)}
			/>
			<input
				type='password'
				id='newPassword'
				className='p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='New Password'
				onChange={(e) => setNewPassword(e.target.value)}
			/>
			<input
				type='password'
				id='confirmPassword'
				className='p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Confirm Password'
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<button
				className='py-2 w-[20rem] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
				onClick={handleClickUpdatePassword}
			>
				Update Password
			</button>
		</div>
	);
}

export default EditPasswordFrom;
