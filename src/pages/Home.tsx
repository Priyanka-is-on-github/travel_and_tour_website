import React from "react";
import Layout from "../layout";
import { Box, Typography } from "@mui/material";
import Details from "../components/Details";
import Cards from "../components/Cards";

function Home() {
  return (
    <Layout> 
      <Box> 
        <Box sx={{ position: "relative", height: "93vh" }}> 
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
            src="src\video\bgvideo.mp4"
            width="100%"
            height="100%"
            autoPlay={true}
            loop
            muted
            style={{ objectFit: "fill" }}
          />
          <Details />
        </Box>

        <Cards />


      </Box>
    </Layout>
  );
}

export default Home;
