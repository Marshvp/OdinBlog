import './App.css'
import useFetch from './hooks/useFetch'

function App() {

  const { data, error, loading } = useFetch(`http://${import.meta.env.VITE_API}`)

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error... {error}</div>
  return (
    <>
      <span>{data.message}</span>
    </>
  )
}

export default App
