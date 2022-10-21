import { useEffect, useState, createContext, useContext } from 'react'
import * as authService from '../api/authApi'
import { getLocalStorage } from '../utils/localStorage'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)

  console.log(user)

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
  }

  return (
    <AuthContext.Provider value={{ initialLoading, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
