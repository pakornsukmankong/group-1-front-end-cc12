import { useEffect, useState, createContext, useContext } from 'react'
import * as authService from '../api/authApi'
import {
  getLocalStorage,
  addLocalStorage,
  removeLocalStorage,
} from '../utils/localStorage'
import { toastError, toastSuccess } from '../utils/toast'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verifyStatus, setVerifyStatus] = useState('')
  const [initialLoading, setInitialLoading] = useState(true)
  const [isRegisterEmail, setIsRegisterEmail] = useState('')

  console.log(isRegisterEmail)

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getLocalStorage()) {
          await getMe()
        }
      } catch (err) {
        console.log(err)
      } finally {
        setInitialLoading(false)
      }
    }
    fetchMe()
  }, [])

  const getMe = async () => {
    const res = await authService.getMe()
    setUser(res.data.user)
    // console.log(res.data.user);
  }

  const sendOutOtp = async (phoneNumber) => {
    const res = await authService.sendOtp(phoneNumber)
    setPhoneNumber(res.data.customerPhoneNumber)
  }

  const verifyOtp = async (phoneNumber, code) => {
    const res = await authService.verifyOtp(phoneNumber, code)
    addLocalStorage(res.data.token)
    setUser(res.data.user)
    setVerifyStatus(res.data.statusOtp)
  }

  const loginWithEmail = async (input) => {
    const res = await authService.loginWithEmail(input)
    if (res.data.token) {
      setIsRegisterEmail(res.data.msg)
      addLocalStorage(res.data.token)
      getMe()
      toastSuccess('Login Success')
    }

    if (res.data.msg === 'notRegister') {
      setIsRegisterEmail(res.data.msg)
      toastError('You are not register')
    }
  }

  const register = async (input) => {
    const res = await authService.register(input)
    addLocalStorage(res.data.token)
    getMe()
  }

  const logout = async () => {
    removeLocalStorage()
    setUser(null)
    setPhoneNumber('')
    setVerifyStatus('')
    window.location.assign('/')
  }

  const updateAccountUser = async (data) => {
    await authService.updateUser(data)
    getMe()
    // return res;
  }

  const deleteUser = async () => {
    try {
      await authService.deleteUser()
      removeLocalStorage()
      window.location.assign('/')
    } catch (err) {
      console.log(err)
    }
  }

  const closeModalRegisWithEmail = () => {
    setIsRegisterEmail('')
  }

  return (
    <AuthContext.Provider
      value={{
        initialLoading,
        user,
        loginWithEmail,
        register,
        logout,
        sendOutOtp,
        verifyOtp,
        phoneNumber,
        verifyStatus,
        updateAccountUser,
        deleteUser,
        setVerifyStatus,
        isRegisterEmail,
        closeModalRegisWithEmail,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
