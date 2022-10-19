import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';

const AuthSlice = createSlice({
	name: 'Auth',
	initialState: { phoneNumber: '', verifyStatus: '' },
	reducers: {
		Otp: (state, action) => {
			state.phoneNumber = action.payload;
			console.log(state.phoneNumber, 'phoneState');
		},
		verify: (state, action) => {
			state.verifyStatus = action.payload;
			console.log(state.verifyStatus, verifyStatus);
		},
	},
});

export default AuthSlice.reducer;
export const { Otp } = AuthSlice.actions;

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
	try {
		const res = await authService.sendOtp(phoneNumber);
		console.log(res.data, 'res.data');
		// console.log(phoneNumber);
		dispatch(Otp(res.data.data.status));
	} catch (err) {
		console.log(err);
	}
};

export const verifyOtp = (phoneNumber, code) => async (dispatch) => {
	try {
		const res = await authService.verify(phoneNumber, code);
		console.log(res.data, 'res.data');
		// console.log(phoneNumber);
		// dispatch(Otp({ phoneNumber: res.data }));
		// console.log('verify');
	} catch (err) {
		console.log(err);
	}
};
