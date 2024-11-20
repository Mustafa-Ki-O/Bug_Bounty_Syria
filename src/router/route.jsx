import { createBrowserRouter, Outlet, useLocation } from "react-router-dom"
import Register from "../app/auth/Register"
import Home from "../app/home"
import Company from "../app/Company"
import Profile from "../app/Profile"
import Gaps from "../app/Gaps"
import Navbar from "../components/general/Navbar"
import { Container } from "@mantine/core"
import Footer from "../components/general/Footer"
import CheckCode from "../app/auth/CheckCode"
import CheckCodeRegister from "../app/auth/CheckCodeRegister"
import ReSetPassword from "../app/auth/ReSetPassword"
import AddProgram from "../app/AddProgram"
import ChangePassword from "../app/auth/ChangePassword"
import Researcher from "../app/Researcher"
import GeneralLogin from "../app/auth/GeneralLogin"
import NotFound from "../app/errors/NotFound"
import InternalServer from "../app/errors/InternalServer"
import Unauthorized from "../app/errors/Unauthorized"

const route = createBrowserRouter([
    {
        path:'/',
        element:(
        <>
        <Container  fluid p='100px 0'  style={{placeContent:'center',minHeight:'100vh'}}>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </Container>
        </>),
        children:[
            {
                path:'',
                element:<Register/>
            },
            {
                path:'login',
                element:<GeneralLogin/>
            },

            {
                path: "resetpassword",
                element: <ReSetPassword />,
              },
              {
                path: "checkcode",
                element: <CheckCode />,
              },
              {
                path: "checkcoderegister",
                element: <CheckCodeRegister />,
              },
              {
                path:'changePassword',
                element: <ChangePassword/>
              },
            {
                path: "home",
                element: <Home />,
            },
            {
              path: "gabs",
              element: <Gaps />,
            },
            {
              path:'researcher/:id',
              element:<Researcher/>
            },

            {
                path: "company/:id",
                element: <Company />,
           }, 
           {
               path:'profile',
               element: <Profile/>
           },
           {
               path:'addProgram',
               element: <AddProgram/>
           },
           {
            path:'not-found',
            element:<NotFound/>
           },
           {
            path:'server-error',
            element:<InternalServer/>
           },
           {
            path:'unauthorized',
            element:<Unauthorized/>
           }
        ]
    }
    
],
{
  future: {
    v7_fetcherPersist: true, // Opt-in to the new fetcher behavior
  },
})


export default route
