import { configureStore } from '@reduxjs/toolkit';
import AdultsChildCounter from './AdultsChildCounter';
import AuthSlice from './AuthSlice';

export const store = configureStore({
	reducer: {
		counter: AdultsChildCounter,
		auth: AuthSlice,
	},
});
