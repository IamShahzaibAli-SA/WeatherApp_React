import { useState } from 'react'
import './App.css'
import useWeatherInfo from './hooks/useWeatherInfo'

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState("karachi");

  const data = useWeatherInfo(city);
  return (
    <>
    <div className='flex justify-center mt-5'>
      <input 
      type="text"
      className='bg-white rounded px-2 py-2'
      placeholder='City Name'
      onChange={(e) => setCity(e.target.value)}
      />
    </div>
    </>
  )
}

export default App
