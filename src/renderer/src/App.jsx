import { useState } from 'react'
import Versions from './components/Versions'
import photo from './assets/photo.jpg'
function App()
{
  const [count, setCount] = useState(0)
  return (
    <div className='app'>
      <h2>Kairat task done</h2>
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount((prev) => prev + 1)}>Count + 1</button>
        <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)}>Count - 1</button>
      </div>
      <div className='img'><img src={photo} alt="img" /></div>
      <Versions />
    </div>
  )
}

export default App

