import './App.css'
import SignUpForm from './components/signUpForm'
import useFetch from './hooks/useFetch'

function App() {

  const { data, error, loading } = useFetch(`http://${import.meta.env.VITE_API}`)


  if (loading) return <div>Loading...</div>
  if (error) return <div>Error... {error}</div>
  return (
    <>
      <span>{data.message}</span>
      <br />
      <SignUpForm />
    </>
  )
}

export default App
