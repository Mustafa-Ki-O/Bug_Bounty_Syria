import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './app/StartPage'
import { RouterProvider } from 'react-router-dom'
import route from './router/route'
import { Toaster } from 'react-hot-toast';

function App() {

  0
  const [show,setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  },4000);

  return (
    <>
    { show ? <StartPage/> : <RouterProvider router={route} /> }
     <Toaster/>
    </>
  )
}


export default App
