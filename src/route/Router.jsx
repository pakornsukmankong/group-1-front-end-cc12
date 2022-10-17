import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/auth/AuthLayout';
import HomeLayout from '../layout/auth/HomeLayout';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import WhitelistPage from '../pages/WhitelistPage';

function Router() {

	return (
		<>
			<Routes>
				<Route path='/' element={<AuthLayout />}>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/account' element={<AccountPage />}></Route>
					<Route path='/whitelist' element={<WhitelistPage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default Router;
