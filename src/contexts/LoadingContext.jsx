import { createContext, useCallback, useContext, useState } from 'react'

const LoadingContext = createContext()

function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false)

  const startLoading = useCallback(() => setLoading(true), [])
  const stopLoading = useCallback(() => setLoading(false), [])
  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
  return useContext(LoadingContext)
}

export default LoadingContextProvider
