import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'


function App() {
  const [date, setDate] = useState("")
  const apiURL = import.meta.env.VITE_BACKEND_URL

  const getTimeFromApi = async()=>{
    try {
      let response = await fetch(apiURL + "/hora")
      let data = await response.json()
      let newDate = new Date(data)
      setDate(newDate)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTimeFromApi()
  },[])

  return (
    <>
      <Header />
      <h2>fecha de backend {JSON.stringify(date)}</h2>
    </>
  )
}

export default App
