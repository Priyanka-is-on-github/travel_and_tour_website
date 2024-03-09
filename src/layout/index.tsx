import { Box } from '@mui/material'
import React, { Children, ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Layout({children}:{children:ReactNode}) {  
  return (
   <Box sx={{

    
    width:"100%",
    height:"100vh",


   }}>
     <NavBar/>
    <Box>{children}</Box> 
    <Footer/> 

    
   </Box>
  )
}

export default Layout