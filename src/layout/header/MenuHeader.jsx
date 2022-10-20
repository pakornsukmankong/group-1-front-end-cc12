import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDropDownGuest from './MenuDropDownGuest';
import MenuDropDownAsUser from './MenuDropDownUser';
import { useSelector } from 'react-redux';

function MenuHeader() {
	const userStatus = useSelector((state) => state.auth.userStatus);

	return (
		<>
			<Link to='/becomeHosting'>
				<div className='font-medium rounded-full flex flex-row w-auto p-2 cursor-pointer hover:shadow mr-2 '>
					{userStatus ? 'Switch to hosting' : 'Become a Host'}
				</div>
			</Link>
			<div className='rounded-full flex flex-row w-auto p-2 cursor-pointer hover:shadow mr-5'>
				<i className='fa-solid fa-globe  text-gray-600 text-[1rem]'></i>
			</div>
			{userStatus ? <MenuDropDownAsUser /> : <MenuDropDownGuest />}
		</>
	);
}
export default MenuHeader;
