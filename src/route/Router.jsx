import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/auth/AuthLayout';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';

function Router() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AuthLayout />}>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/account' element={<AccountPage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default Router;
