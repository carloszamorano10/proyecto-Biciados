import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carrusel from './components/Carrusel'
import Map from './components/Map'


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
      <Carrusel />
      <Map />
      <Footer />
    </>
  )
}

export default App
