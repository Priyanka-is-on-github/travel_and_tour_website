import React from "react";
import { Box, Typography, Grid, Hidden, MenuList, MenuItem, ListItemIcon, IconButton, Menu } from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { ContentCut } from "@mui/icons-material";
import ClearIcon from '@mui/icons-material/Clear';

const ITEM_HEIGHT = 48;

function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => { 
    setAnchorEl(null); 
  };

  return (
    <Box
      sx={{
        position: "static",
        backgroundColor: "#fff",
        width:"100%",
        
        display: "flex",
       
        boxShadow: "0 4px 6px 2px rgba(0,0,0,0.3)",
      }}
    >
      <Box
        sx={{
          flex: "0.3",
          alignItems: "center",
          ml:{
            xs:5,
            lg: 20 
          },
         
          display: "flex",
          gap: 2,

        }}
      >
        <Box>
          <ConnectingAirportsIcon fontSize="large" sx={{ color: "#5C8374 " }} />
        </Box>

        <Box sx={{py:{
          xs:"15px"
        }}}>
          <Typography variant="h4" component="h2" fontWeight={600}>
            PSTravel
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: "0.4" }}></Box>

      <Box sx={{ flex: "1",
       mr:{
        xs:5, 
        lg:20,

       } }}> 

         {/* Menu button for small screen  */}

      <Hidden lgUp >
      <IconButton
       sx={{display:"flex", justifyContent:"flex-end" , borderRadius:0, width:"100%"}}  
       onClick={handleClick}
     >
       <MenuIcon  sx={{ fontSize:30}}/> 
     </IconButton> 

     <Menu
       id="long-menu"
       MenuListProps={{
         'aria-labelledby': 'long-button',
       }}
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       PaperProps={{
         style: {
           maxHeight: ITEM_HEIGHT * 7.5,
           width: '27ch',
           borderRadius:"10px",
           
          
         },
       }}
     >
       <MenuItem sx={{display:"flex",justifyContent:"end",}}>
       <ListItem disablePadding onClick={handleClose} sx={{ backgroundColor:"#5C8374", width:35, padding:"5px", borderRadius:50, boxShadow:"0 1px 2px  2px rgba(0,0,0,0.3)" }}> 

       <ClearIcon  /> 

       </ListItem>
       </MenuItem>

        <MenuItem>
       <ListItem disablePadding >
           <Link to="/">
             
               <ListItemText primary="Home"/>
             
             </Link>
           </ListItem>
       </MenuItem>

       <MenuItem>
       <ListItem disablePadding>
           <Link to="/packages">
             
               <ListItemText primary="Packages" />
             
             </Link>
           </ListItem>
       </MenuItem>

       <MenuItem>
       <ListItem disablePadding>
           <Link to="/about">
             
               <ListItemText primary="About" />
             
             </Link>
           </ListItem>
       </MenuItem>

       <MenuItem>
       <ListItem disablePadding>
           <Link to="/contact">
            
               <ListItemText primary="Contact" />
             
             </Link>
           </ListItem>
       </MenuItem>

       <MenuItem>
       <ListItem disablePadding>
           <Link to="/services">
             
               <ListItemText primary="Services" />
            
             </Link>
           </ListItem>
       </MenuItem>

       <MenuItem>
       <ListItem>
              <Button
                variant="contained"
                sx={{ padding: "10px 30px", borderRadius: 10, fontWeight: 700, whiteSpace:"nowrap" }} 
              >
                Book now
              </Button>
            </ListItem>
       </MenuItem>
     </Menu>
      </Hidden>

      
       {/* Navbar for large screen */}
     

        <nav> 
          <List sx={{ display: "flex" }}>
            <Hidden lgDown>  
            <ListItem disablePadding>
            <Link to="/">
              <ListItemButton component="div" >
                <ListItemText primary="Home" />
              </ListItemButton>
              </Link>
            </ListItem>
           
            
            <ListItem disablePadding>
            <Link to="/packages">
              <ListItemButton component="div">
                <ListItemText primary="Packages" />
              </ListItemButton>
            </Link>
            </ListItem>
           

            <ListItem disablePadding>
              <Link to="/about">
              <ListItemButton component="div">
                <ListItemText primary="About" />
              </ListItemButton>
              </Link>
             
            </ListItem>

            <ListItem disablePadding>
            <Link to="/contact">
            <ListItemButton component="div">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </Link>
              
            </ListItem>

            <ListItem disablePadding>
            <Link to="/services">
            <ListItemButton component="div" >
                <ListItemText primary="Services" />
              </ListItemButton>
            </Link>
             
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ padding: "10px 30px", borderRadius: 10, fontWeight: 700, whiteSpace:"nowrap" }}
              >
                Book now
              </Button>
            </ListItem>
            </Hidden>
           
            
          </List>
        </nav>
      </Box>
    </Box>
  );
}

export default NavBar;
