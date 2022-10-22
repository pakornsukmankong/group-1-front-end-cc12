import { createSlice } from '@reduxjs/toolkit'
import * as authService from '../api/authApi'
import { addLocalStorage } from '../utils/localStorage'

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    phoneNumber: '',
    verifyStatus: '',
    loading: false,
    userStatus: false,
    userInfo: null,
  },
  reducers: {
    otp: (state, action) => {
      state.phoneNumber = action.payload
      console.log(state.phoneNumber, 'phoneState')
    },
    verify: (state, action) => {
      state.verifyStatus = action.payload
      console.log(state.verifyStatus, 'verifyStatus')
    },
    setUser: (state, action) => {
      state.userStatus = action.payload
      console.log(state.userStatus, 'userStatus')
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
      if (!state.userInfo) {
        throw { message: 'userInfo Undifined' }
      }
      console.log(state.userInfo, 'userInfo')
    },
    startLoading: (state, action) => {
      state.loading = true
    },
    stopLoading: (state, action) => {
      state.loading = false
    },
  },
})

export default AuthSlice.reducer
export const { otp, verify, setUser, setUserInfo, startLoading, stopLoading } =
  AuthSlice.actions

export const sendOutOtp = (phoneNumber) => async (dispatch) => {
  try {
    dispatch(startLoading())
    const res = await authService.sendOtp(phoneNumber)
    // // dispatch(otp(phoneNumber));
    dispatch(otp(res.data.customerPhoneNumber))
    // console.log(res.data, 'res.data');
    // console.log(res.data.customerPhoneNumber, 'customerPhoneNumber');
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(stopLoading())
  }
}

export const verifyOtp = (phoneNumber, code) => async (dispatch) => {
  try {
    dispatch(startLoading())
    const res = await authService.verifyOtp(phoneNumber, code)
    // // console.log(res, 'res');
    // // console.log(res.data, 'res.data');
    // // console.log(res.data.statusOtp, 'statusOtp');
    // // console.log(phoneNumber, 'logJs');
    await dispatch(verify(res.data.statusOtp))
    // // // ############################################
    await dispatch(setUserInfo(res.data.user))
    addLocalStorage(res.data.token)
    await dispatch(setUser(true))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(stopLoading())
  }
}
