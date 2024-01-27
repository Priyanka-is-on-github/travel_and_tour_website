import React from 'react'
import Layout from '../layout'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <Layout>
      <Box sx={{position:"relative"}}>
        <Box sx={{bgcolor:"black", height:"100%", width:"100%", position:"absolute", opacity:"0.3" }}/> 

        
      <video src="src\video\bgvideo.mp4" width="100%" height="100%" autoPlay={true} loop muted  /> 
    
      
      </Box> 
    </Layout>
        
   
    
  )
}

export default Home 