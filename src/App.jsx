import { useLoading } from './contexts/LoadingContext'
import Router from './route/Router'
import Spinner from './components/Spinner'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { loading } = useLoading()
  const { initialLoading } = useAuth()

  if (initialLoading) return <Spinner />
  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  )
}

export default App
