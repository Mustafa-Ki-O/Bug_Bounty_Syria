import { createBrowserRouter, Outlet } from "react-router-dom"
import Register from "../app/auth/Register"
import Login from "../app/auth/Login"
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
import LoginCompany from "../app/auth/LoginCompany"
import ChangePassword from "../app/auth/ChangePassword"

const route = createBrowserRouter([
    {
        path:'/',
        element:(
        <>
        <Container fluid p={0}>
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
                element:<Login/>
            },
            {
                path: "loginCompany",
                element: <LoginCompany />,
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
                path: "company/:id",
                element: <Company />,
           }, 
           {
               path:'/:id',
               element: <Company/>
           },
           {
               path:'profile',
               element: <Profile/>
           },
           {
               path:'addProgram',
               element: <AddProgram/>
           }        
        ]
    }
    
])


export default route
