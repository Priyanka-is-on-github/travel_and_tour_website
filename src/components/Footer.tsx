import { Box, Button, CardActions, Typography } from "@mui/material";
import React from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <Box sx={{ position: "relative", height: "79vh" }}>
      <Box
        sx={{
          bgcolor: "black",
          height: { xs: "100vh", lg: "100%" },
          width: "100%",
          position: "absolute",
          opacity: "0.3",
        }}
      />
      <video
        src="src\video\backvideo.mp4"
        width="100%"
        height="100%"
        autoPlay={true}
        loop
        muted
        style={{ objectFit: "fill" }}
      />

      <Box
        id="head"
        sx={{
          position: "absolute",
          backgroundColor: "transparent",
          height: "10vh",
          width: "80%",
          top: "16%",
          left: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
         <div data-aos="fade-up"
     data-aos-duration="2000">
        
         
            <Typography
              variant="h6"
              id="heading"
              sx={{ fontSize: { xs: "10px", lg: "16px" } }}
            >
              {" "}
              KEEP IN TOUCH
            </Typography>
            <Typography
              variant="h2"
              id="heading1"
              sx={{ fontSize: { xs: "20px", lg: "30px" } }}
            >
              Travel with us<span></span>
            </Typography>
          

        </div>

        <Box sx={{ padding: "10px 20px", width: "18%" }}>
          <div data-aos="fade-up" data-aos-duration="2000">
            <input type="email" placeholder="Enter Email Address" id="email" />
          </div>
        </Box>

        <div data-aos="fade-up" data-aos-duration="2000">
          <CardActions>
            <Button
              variant="contained"
              id="sendbtn"
              sx={{
                padding: "10px 40px",
                borderRadius: 10,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Send
            </Button>
          </CardActions>
        </div>
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          margin: " 15rem auto",
          width: "75%",
          height: { xs: "50%", lg: "45%", sm: "20%" },
          bgcolor: "white",
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "87%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
          }}
          id="detail"
        >


          <Box sx={{ flex: "1", pt: "3.5rem", pl: "1rem" }}>
            <Box sx={{ display: "flex", pb: "1.5rem" }}>
           
              <TravelExploreIcon sx={{ color: "#176B87", pr: "0.75rem" }} />

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "10px", lg: "23px" },
                  fontWeight: "bold",
                }}
              >
                Travel.
              </Typography>
              
            </Box>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              dolorum nisi ea perspiciatis consequuntur possimus? Dolore ratione
              ducimus, eveniet corrupti explicabo laborum laboriosam ad
              consectetur nihil. Omnis harum delectus similique.
            </p>

            <Box sx={{ pt: "1rem", color: "#747264" }}>
              <TwitterIcon className="icon" sx={{ pr: "0.5rem" }} />
              <YouTubeIcon className="icon" sx={{ pr: "0.5rem" }} />
              <LinkedInIcon className="icon" sx={{ pr: "0.5rem" }} />
              <GitHubIcon className="icon" sx={{ pr: "0.5rem" }} />
            </Box>
            
          </Box>
          




          <Box sx={{ flex: "1", display: "flex", pt: "3.5rem", pl: "1rem" }}>
            <Box sx={{ flex: "1" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#3C3633", pb: "0.9rem" }}
              >
                {" "}
                OUR AGENCY
              </Typography>

              <Box
                sx={{
                  pl: "1.2rem",
                  fontSize: "15px",
                  fontWeight: "530",
                  color: "#747264",
                }}
              >
                <ul id="info">
                  <li> Services</li>
                  <li> Insurance</li>
                  <li> Agency </li>
                  <li> Tourism</li>
                  <li> Payment</li>
                </ul>
              </Box>
            </Box>

            <Box sx={{ flex: "1" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#3C3633", pb: "0.9rem" }}
              >
                {" "}
                PARTNERS
              </Typography>

              <Box
                sx={{
                  pl: "1.2rem",
                  fontSize: "15px",
                  fontWeight: "530",
                  color: "#747264",
                }}
              >
                <ul id="info">
                  <li> Booking</li>
                  <li> RentalCar</li>
                  <li> HostelWorld</li>
                  <li> Trivago</li>
                  <li> TripAdvisor</li>
                </ul>
              </Box>
            </Box>

            <Box sx={{ flex: "1" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "#3C3633", pb: "0.9rem" }}
              >
                {" "}
                LAST MINUTE
              </Typography>

              <Box
                sx={{
                  pl: "1.2rem",
                  fontSize: "15px",
                  fontWeight: "530",
                  color: "#747264",
                }}
              >
                <ul id="info">
                  <li> London</li>
                  <li> California</li>
                  <li> Indonesia</li>
                  <li> Europe</li>
                  <li> Oceanic</li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "2.8rem",
            display: "flex",
            backgroundColor: "#2D9596",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            borderRadius: "0 0 15px 15px",
            color: "#fff",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography>BEST TRAVEL WEBSITE THEME</Typography>
          <Typography>COPYRIGHTS RESERVED-ISRATECT-2024</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
