import { createSlice } from '@reduxjs/toolkit'

const ReserveCounterSlice = createSlice({
  name: 'counter',
  initialState: { adultsCount: 0, childrenCount: 0 },
  reducers: {
    adultIncrease: (state, action) => {
      state.adultsCount += 1
    },
    adultDecrease: (state, action) => {
      if (state.adultsCount > 0) {
        state.adultsCount -= 1
      }
    },
    childIncrease: (state, action) => {
      state.childrenCount += 1
    },
    childDecrease: (state, action) => {
      if (state.childrenCount > 0) {
        state.childrenCount -= 1
      }
    },
  },
})

export default ReserveCounterSlice.reducer

export const { adultIncrease, adultDecrease, childIncrease, childDecrease } =
  ReserveCounterSlice.actions
