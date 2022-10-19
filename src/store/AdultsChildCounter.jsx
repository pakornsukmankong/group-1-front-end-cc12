import { createSlice } from '@reduxjs/toolkit';

const AdultsChildCounter = createSlice({
	name: 'Counter',
	initialState: { adultsCount: 0, childrenCount2: 0 },
	reducers: {
		increase: (state, action) => {
			state.adultsCount = state.adultsCount + 1;
		},
		decrease: (state, action) => {
			state.adultsCount = state.adultsCount - 1;
		},
		increase1: (state, action) => {
			state.childrenCount2 = state.childrenCount2 + 1;
		},
		decrease1: (state, action) => {
			state.childrenCount2 = state.childrenCount2 - 1;
		},
	},
});

export default AdultsChildCounter.reducer;

export const { increase, decrease, increase1, decrease1 } =
	AdultsChildCounter.actions;
