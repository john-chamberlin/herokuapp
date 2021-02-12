import './App.css'
import { useState, useEffect } from 'react'

const url = path => {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:4000${path}`
    : path
}

function App() {
  const [data, setData] = useState('sup')

  useEffect(() => {
    fetch(url('/api/'))
      .then(res => res.json())
      .then(api => setData(api.data))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>API Data: {data} </header>
    </div>
  )
}

export default App
