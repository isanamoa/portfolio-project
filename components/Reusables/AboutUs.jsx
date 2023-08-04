import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ width:{md:3/4 }, my:{xs:2, sm:1} }} >
      <Typography variant="h4" 
        sx={{ fontSize:'1.5rem', fontWeight:700 }}
      >
        isanamoa
      </Typography>
    </Box>
  )
}

export default AboutUs;
