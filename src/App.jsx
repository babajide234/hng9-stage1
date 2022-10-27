import { useState } from 'react'
import './App.css'
import Icon from './assets/icon.svg'
function App() {
  
  return (
    <>
      <div className="container">
          <section className="profile__section">
                <div className="img_container" id="profile__img">
                    <div className="profile__upload"><img src={Icon} alt="" /></div>
                </div>
                <h1 className="profile__name">Babajide Tomoshegbo</h1>
          </section>
      </div>
    </>
  )
}

export default App
