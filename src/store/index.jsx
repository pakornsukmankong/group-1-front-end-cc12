import { configureStore } from '@reduxjs/toolkit';
import AdultsChildCounter from './AdultsChildCounter';

export const store = configureStore({
	reducer: {
		counter: AdultsChildCounter,
	},
});
