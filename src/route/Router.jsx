import { Routes, Route } from 'react-router-dom';
import EmailLoginModal from '../components/Modal/EmailLoginModal';
import LoginRegisterModal from '../components/Modal/LoginRegisterModal';
import PhoneAuthModal from '../components/Modal/PhoneAuthModal';
import RegisterModal from '../components/Modal/RegisterModal';
import ReserveComponent from '../components/Modal/ReserveComponent';
import AuthLayout from '../layout/auth/AuthLayout';
import HomeLayout from '../layout/auth/HomeLayout';
import AccountPage from '../pages/AccountPage';
import BecomeHostPage from '../pages/BecomeHostPage';
import ConfirmPaymentPage from '../pages/ConfirmPaymentPage';
import HomePage from '../pages/HomePage';
import RoomPage from '../pages/RoomPage';
import WhitelistPage from '../pages/WhitelistPage';

function Router() {
	return (
		<>
			<Routes>
				<Route path='/' element={<AuthLayout />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/' element={<HomeLayout />}>
					<Route path='/account' element={<AccountPage />} />
					<Route path='/whitelist' element={<WhitelistPage />} />
					<Route path='/confirmPayment' element={<ConfirmPaymentPage />} />
					<Route path='/rooms' element={<RoomPage />} />
					<Route path='/login' element={<LoginRegisterModal />}></Route>
					<Route path='/loginEmail' element={<EmailLoginModal />}></Route>
					<Route path='/register' element={<RegisterModal />}></Route>
					<Route path='/reserve' element={<ReserveComponent />}></Route>
					<Route path='/phoneAuth' element={<PhoneAuthModal />}></Route>
					<Route path='/becomeHosting' element={<BecomeHostPage />}></Route>
				</Route>
			</Routes>
		</>
	);
}

export default Router;
