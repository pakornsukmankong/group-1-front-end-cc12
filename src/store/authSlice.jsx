import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
	name: 'Counter',
	initialState: { phoneNumber: '', otpNumber: '' },
	reducers: {
		sendOtp: (state, action) => {},
		verify: (state, action) => {},
	},
});

export default AuthSlice.reducer;
