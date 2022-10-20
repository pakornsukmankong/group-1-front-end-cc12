import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';

const AuthSlice = createSlice({
	name: 'Auth',
	initialState: { phoneNumber: '', verifyStatus: '' },
	reducers: {
		otp: (state, action) => {
			state.phoneNumber = action.payload;
			console.log(state.phoneNumber, 'phoneState');
		},
		verify: (state, action) => {
			state.verifyStatus = action.payload;
			console.log(state.verifyStatus, 'verifyStatus');
		},
	},
});

export default AuthSlice.reducer;
export const { otp, verify } = AuthSlice.actions;

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
	try {
		const res = await authService.sendOtp(phoneNumber);
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

		console.log(res.data, 'res.data');
		console.log(res.data.statusOtp, 'statusOtp');
	} catch (err) {
		console.log(err);
	}
};

// dispatch(verify(res.data.statusOtp));
