import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
          <section className="profile__section">
                <div className="img_container">

                </div>
                <h1 className="profile__name">Babajide Tomoshegbo</h1>
          </section>
      </div>
    </>
  )
}

export default App
