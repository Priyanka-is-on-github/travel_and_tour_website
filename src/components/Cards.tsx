import { Box, Typography } from '@mui/material'
import React from 'react'
import MediaCard from './Card'
import dataList from '../assets/dataList'



function Cards() {
  return (
    <>
    <Box sx={{ bgcolor:"#fff", width:"100%",  padding:"8rem 0rem"}}>
   
        <Box sx={{  width:"85%", margin:"0px auto", }}>
        <Typography variant='h5' id='heading5'> Most visited destinations</Typography>
            <hr className='hrline'/>
           <Box sx={{ display: "flex", gap: 4, flexWrap:'wrap', justifyContent:"center", }}>
            {
              dataList.map((data)=>{  
                return(
                  <div data-aos="fade-up"
                  data-aos-duration="3000">
                    <MediaCard  destination={data}/> 
                  </div>

                  
                )
              })
            }
           
           </Box>
          


        </Box>
       
    </Box>
    </>
    
  )
}

export default Cards