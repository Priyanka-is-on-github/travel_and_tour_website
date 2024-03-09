import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import { Box } from '@mui/material';

export default function MediaCard({destination}) { 
  { console.log(destination)} 
  return (
   
 
    <Card sx={{ maxWidth: 445 , minWidth: 445, boxShadow:"2px 2px 3px 2px rgba(0,0,0,0.3)", borderRadius:3, }}>  

      <Box sx={{height:200, overflow:"hidden",   }}> 
      <CardMedia
        sx={{ height: "100%" , transition: "transform 0.3s ease-in-out ", "&:hover":{transform: "scale(1.3)"},}}  
       image= {destination.imgSrc} 
    
      />
      </Box>
      
      <CardContent sx={{ height:"55%", }}> 
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:800,pt:2}}> 
        {destination.destTitle}
        </Typography>

        <Typography gutterBottom variant="h6" component="div" sx={{color:"gray", fontSize:15, pb:2}}>
        <LocationOnIcon  sx={{fontSize:18}}/> 
        {destination.Location}
        </Typography>
        <hr />

       <Box sx={{display:"flex", justifyContent:"space-between", pt:2, pb:2, }}>
        <Typography sx={{color:"gray", fontWeight:560}}>{destination.grade}
        {/* <Button
                variant="contained"
                sx={{ padding: "0px 0px", borderRadius: 15, whiteSpace:"nowrap" }}
              >
              +1
              </Button> */}
        
        </Typography>
        <Typography  variant='h4' sx={{fontWeight:700}} >{destination.fees}</Typography>
       </Box>

        <hr />


        <Typography variant="body2"  sx={{pt:2, pb:2 , height:40 , color:"#555843", overflow: 'hidden', 
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical',}} >
         {destination.description}
        </Typography>

        <CardActions>
      <Button
                variant="contained"
                sx={{ padding: "8px 27px", borderRadius: 10, fontWeight: 700, whiteSpace:"nowrap" }}
              >
              Details
              </Button>
        
      </CardActions>
      </CardContent>
      
    </Card>
  );
}