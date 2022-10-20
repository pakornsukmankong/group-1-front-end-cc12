import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';
import {
	addLocalStorage,
	getLocalStorage,
	removeLocalStorage,
} from '../utils/localStorage';

const AuthSlice = createSlice({
	name: 'Auth',
	initialState: { phoneNumber: '', verifyStatus: '', userStatus: false },
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
	},
});

export default AuthSlice.reducer;
export const { otp, verify, setUser } = AuthSlice.actions;

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
	try {
		const res = await authService.sendOtp(phoneNumber);
		// dispatch(otp(phoneNumber));
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
		// console.log(res.data, 'res.data');
		// console.log(res.data.statusOtp, 'statusOtp');
		dispatch(verify(res.data.statusOtp));
	} catch (err) {
		console.log(err);
	}
};

export const register = (input) => async (dispatch) => {
	try {
		console.log(input);
		const res = await authService.register(input);
		console.log(res.data);
		addLocalStorage(res.data.token);
		dispatch(setUser(true));
	} catch (err) {
		console.log(err);
	}
};
