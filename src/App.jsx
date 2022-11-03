import { useState } from 'react'
import './App.css'
import Icon from './assets/icon.svg';
import Share from './assets/share.svg';
import Slack from './assets/slack.svg';
import Github from './assets/Social icon.svg';
import Zuri from './assets/ZuriLogo.svg';
import Di from './assets/ll.svg';

import { RouterProvider } from 'react-router-dom';
import Router from './route/Routes';
function App() {
  
  return (
    <>
        <RouterProvider router={Router}/>
    </>
  )
}

export default App
