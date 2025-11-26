import { useState } from 'react'
import './App.css'
import useWeatherInfo from './hooks/useWeatherInfo'

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState("karachi");

  const data = useWeatherInfo(city);
  return (
    <>
    <div className='flex justify-center'>
      <input 
      type="text"
      className='bg-white'

      />
    </div>
    </>
  )
}

export default App
