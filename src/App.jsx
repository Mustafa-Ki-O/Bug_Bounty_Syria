import { useEffect, useState } from 'react'
import './App.css'
import StartPage from './app/StartPage'
import { RouterProvider } from 'react-router-dom'
import route from './router/route'
import { Toaster } from 'react-hot-toast';


function App() {
  

  const [show,setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  },4000);




  return (
    <>
    {show ? <StartPage/> : 
     <RouterProvider  
     router={route} /> }
     <Toaster/>
    </>
  )
}


export default App
