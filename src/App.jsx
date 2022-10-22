import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useLoading } from './contexts/LoadingContext'
import Router from './route/Router'
import Spinner from './components/Spinner'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { loading } = useLoading()
  const { initialLoading } = useAuth()
  const authSliceLoading = useSelector((state) => state.auth.loading)

  if (initialLoading) return <Spinner />
  return (
    <>
      {(loading || authSliceLoading) && <Spinner />}
      <Router />
      <ToastContainer
        autoClose={2000}
        theme="colored"
        position="bottom-center"
      />
    </>
  )
}

export default App
