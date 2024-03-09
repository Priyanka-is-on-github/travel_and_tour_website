import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Typewriter from './Typewriter'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Details() {
  return (
    <>
   

   
 <Box id="head" sx={{ position:"absolute",backgroundColor:"transparent", height:"10vh" , width:"80%", top:"27%", left:"10%", border:"3px solid red"}}>    
 <Typography  variant='h5' id="heading" sx={{fontSize:{xs:"16px", lg:"20px"}}}> Our Packages</Typography>
 <Typography variant='h2' id="heading1"  sx={{fontSize:{xs:"10px", lg:"50px"}}}>Search your <span><Typewriter text="Holiday" infinite delay={400} /></span></Typography> 
 </Box>
   
    <Box sx={{position:"absolute", inset:0, margin:"auto" , width:"85%", height:{xs:"50%", lg:"20%", sm:"20%"}, bgcolor:"white", borderRadius:4 , display:"flex", alignItems:"center", justifyContent:"center" ,border:"3px solid red",}}> 
      <Box sx={{ width:"95%" , display:"flex", border:"3px solid red",flexWrap:"wrap" , flexDirection:{xs:"column" , sm:"row", lg:"row"}}} id="detail"> 

           <Box sx={{ flex:"1" , border:"3px solid red" }}> 
            <p className='para'>Search your Destination:</p>
            <input type="text"  id='destination' placeholder='Enter name here' className='inpt'/>    
           </Box>

           <Box sx={{flex:"1", border:"3px solid red" }}>
            <p className='para' >Select your Date:</p>
            <input type="date"  id='date' placeholder='dd/mm/yy' className='inpt'/>
           </Box>

           <Box sx={{flex:"1", border:"3px solid red" }}>
            <p className='para'>Max Price</p>
            <div  className='inpt inptrange'>
            <input type="range"  id='price' placeholder='Enter Price' className='inpt'/> 
            </div>
         
           </Box>

           

           <Button
                variant="contained"
                sx={{ position:"absolute",padding: "10px 40px", borderRadius: 10, fontWeight: 700, whiteSpace:"nowrap", top:"87%" , left:"43%"}} 
              ><FilterAltIcon  sx={{ color: "#fff " , marginRight:2}}/>
               More Filter
              </Button>
           
      </Box>
          
       

        </Box>
        
      
        </>
  )
}

export default Details