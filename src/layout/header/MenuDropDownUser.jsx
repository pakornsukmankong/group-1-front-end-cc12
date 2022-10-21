import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

function MenuDropDownAsUser() {
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	const dispatch = useDispatch();

	const handleClickLogout = () => {
		dispatch(logout());
		window.location.assign('/');
	};

	return (
		<Menu
			as='div'
			className='relative inline-block text-left hover:shadow hover:rounded-full'
		>
			<div className='border rounded-full flex flex-row w-auto py-2 px-4 shadow cursor-pointer'>
				<Menu.Button className='flex flex-row items-center justify-between rounded-full w-12 h-6'>
					<i className='fa-solid fa-bars text-gray-600 text-[1rem]'></i>
					<i className='fa-solid fa-circle-user text-gray-600 text-[1.6rem]'></i>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/wishlists/:id'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Wishlists
								</Link>
							)}
						</Menu.Item>
					</div>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='/account/:id'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Account
								</Link>
							)}
						</Menu.Item>
					</div>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<Link
									to='#'
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm'
									)}
								>
									Help
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div
									onClick={handleClickLogout}
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'block px-4 py-2 text-sm cursor-pointer'
									)}
								>
									Log out
								</div>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default MenuDropDownAsUser;
