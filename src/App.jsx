import { useState } from 'react'
import './App.css'
import Icon from './assets/icon.svg'
import Share from './assets/share.svg'
function App() {
  const links = [
    {
      id:'btn__twitter',
      url:'https://twitter.com/dev_jyde',
      name:'Twitter Link',
    },
    {
      id:'btn__zuri',
      url:'https://training.zuri.team/',
      name:'Zuri Team',
    },
    {
      id:'books',
      url:'http://books.zuri.team/',
      name:'Zuri Books',
    },
    {
      id:'book__python',
      url:'https://books.zuri.team/python-for-beginners?ref_id=dev_jyde',
      name:'Python Books',
    },
    {
      id:'pitch',
      url:'https://background.zuri.team/',
      name:'Background Check for Coders',
    },
    {
      id:'book__design’',
      url:'https://books.zuri.team/design-rules',
      name:'Design Books',
    }
  ]
  return (
    <>
      <div className="container">
          <div className="share-btn">
            <img src={Share} alt="" />
          </div>
          <section className="profile__section">
                <div className="img_container" id="profile__img">
                    <div className="profile__upload"><img src={Icon} alt="" /></div>
                </div>
                <h1 className="profile__name" id="twitter">@dev_jyde</h1>
                <h2 className="hidden" id="slack">dev_jyde</h2>
          </section>
          <section className="link__section">
              {
                links.map((item)=>(
                  <>
                      <a href={item.url} id={item.id} className="link">{item.name}</a>
                  </>
                ))
              }
          </section>
      </div>
    </>
  )
}

export default App
