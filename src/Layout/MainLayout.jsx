import React from 'react'
import Zuri from '../assets/ZuriLogo.svg';
import Di from '../assets/ll.svg';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <>
        <Outlet/>
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

export default MainLayout