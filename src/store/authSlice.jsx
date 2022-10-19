import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../api/authApi';

const AuthSlice = createSlice({
	name: 'Auth',
	initialState: { phoneNumber: '', otpNumber: '' },
	reducers: {
		Otp: (state, action) => {
			state.phoneNumber = action.payload;
			console.log(state.phoneNumber);
		},
		verify: (state, action) => {},
	},
});

export default AuthSlice.reducer;
export const { Otp } = AuthSlice.actions;

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
	try {
		const res = await authService.sendOtp(phoneNumber);
		console.log(res.data.data);
		console.log(phoneNumber);
	} catch (err) {
		console.log(err);
	}
};
