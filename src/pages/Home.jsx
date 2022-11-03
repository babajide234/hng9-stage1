import React from 'react'
import Icon from '../assets/icon.svg';
import Share from '../assets/share.svg';
import Slack from '../assets/slack.svg';
import Github from '../assets/Social icon.svg';
import Zuri from '../assets/ZuriLogo.svg';
import Di from '../assets/ll.svg';

const Home = () => {

    const links = [
        {
          id:'btn__twitter',
          url:'https://twitter.com/dev_jyde',
          name:'Twitter Link',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'btn__zuri',
          url:'https://training.zuri.team/',
          name:'Zuri Team',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'books',
          url:'http://books.zuri.team/',
          name:'Zuri Books',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'book__python',
          url:'https://books.zuri.team/python-for-beginners?ref_id=dev_jyde',
          name:'Python Books',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'pitch',
          url:'https://background.zuri.team/',
          name:'Background Check for Coders',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'book__design’',
          url:'https://books.zuri.team/design-rules',
          name:'Design Books',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        },
        {
          id:'contact',
          url:'/contact',
          name:'Contact Me',
          title: 'this is where you find books about design and coding',
          type:'anchor'
        }
    ]
  return (
    <>
        <main className="container">
          <div className="share-btn">
            <img src={Share} alt="" />
            <div className="share-btn-popup">Share Link</div>
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
                      <a key={item.id} href={item.url}  id={item.id} className="link" title={item.title}>{item.name}</a>
                  </>
                ))
              }
          </section>
          <section className="link__social">
              <div className="link__social__buttons">
                <a href="" className=""><img src={Slack} alt="" className="" /></a>
                <a href="https://github.com/babajide234" className=""><img src={Github} alt="" className="" /></a>
              </div>
          </section>
        </main>
        <footer className="footer__section">
                <div className="footer__container"> 
                    <img src={Zuri} alt="" />
                    <h2 className="">HNG Internship 9 Frontend Task</h2>
                    <img src={Di} alt="" />
                </div>
        </footer>
    </>
  )
}

export default Home