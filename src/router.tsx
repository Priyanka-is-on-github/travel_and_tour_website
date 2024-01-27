import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/packages',
        element:<Packages/>,
    },
    {
        path:'/services',
        element:<Services/>,
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    },
    {
        path:'/*',
        element:<Error/>,
    }
])

export default router