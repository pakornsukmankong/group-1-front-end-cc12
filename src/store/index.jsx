import { configureStore } from '@reduxjs/toolkit'
import ReserveCounterReducer from './ReserveCounterSlice'

export const store = configureStore({
  reducer: {
    reserveCounter: ReserveCounterReducer,
  },
})
