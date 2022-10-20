import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';
import {
	addLocalStorage,
	getLocalStorage,
	removeLocalStorage,
} from '../utils/localStorage';

const AuthSlice = createSlice({
	name: 'Auth',
	initialState: {
		phoneNumber: '',
		verifyStatus: '',
		userStatus: false,
		userInfo: '',
	},
	reducers: {
		otp: (state, action) => {
			state.phoneNumber = action.payload;
			console.log(state.phoneNumber, 'phoneState');
		},
		verify: (state, action) => {
			state.verifyStatus = action.payload;
			console.log(state.verifyStatus, 'verifyStatus');
		},
		setUser: (state, action) => {
			state.userStatus = action.payload;
			console.log(state.userStatus, 'userStatus');
		},
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
			if (!state.userInfo) {
				throw { message: 'userInfo Undifined' };
			}
			console.log(state.userInfo, 'userInfo');
		},
	},
});

export default AuthSlice.reducer;
export const { otp, verify, setUser, setUserInfo } = AuthSlice.actions;

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
	try {
		const res = await authService.sendOtp(phoneNumber);
		// // dispatch(otp(phoneNumber));
		dispatch(otp(res.data.customerPhoneNumber));
		// console.log(res.data, 'res.data');
		// console.log(res.data.customerPhoneNumber, 'customerPhoneNumber');
	} catch (err) {
		console.log(err);
	}
};

export const verifyOtp = (phoneNumber, code) => async (dispatch) => {
	try {
		const res = await authService.verifyOtp(phoneNumber, code);
		// // console.log(res, 'res');
		// // console.log(res.data, 'res.data');
		// // console.log(res.data.statusOtp, 'statusOtp');
		// // console.log(phoneNumber, 'logJs');
		await dispatch(verify(res.data.statusOtp));
		// // // ############################################
		await dispatch(setUserInfo(res.data.user));
		addLocalStorage(res.data.token);
		await dispatch(setUser(true));
	} catch (err) {
		console.log(err);
	}
};

export const register = (input) => async (dispatch) => {
	try {
		// console.log(input);
		const res = await authService.register(input);
		// // console.log(res.data);
		addLocalStorage(res.data.token);
		dispatch(setUser(true));
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => async (dispatch) => {
	removeLocalStorage();
	dispatch(setUser(false));
};
