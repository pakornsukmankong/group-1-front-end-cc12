
import { configureStore } from '@reduxjs/toolkit';
import ReserveCounterReducer from './ReserveCounterSlice'
import AuthSlice from './AuthSlice';

export const store = configureStore({
	reducer: {
		reserveCounter: ReserveCounterReducer,
		auth: AuthSlice,
	},
});
