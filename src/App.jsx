import { useLoading } from './contexts/LoadingContext'
import Router from './route/Router'
import Spinner from './components/Spinner'

function App() {
  const { loading } = useLoading()

  return (
    <>
      {loading && <Spinner />}
      <Router />
    </>
  )
}

export default App
