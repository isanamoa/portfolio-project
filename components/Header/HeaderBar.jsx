import {  Box, Container,  } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";

const HeaderBar = () => {
  return (
    <Box sx={{ width:1, position:'absolute', top:0, mb:0, zIndex: 'modal', bgcolor:'' }} >

        <Container sx={{ width:{lg:'70rem'}, mx:'auto', display:'flex', flexDirection:{xs:'column', sm:'row'}, 
              alignItems:'center', justifyContent:{xs:'center', sm:'space-between'},
              pl:{md:2}
            }} 
            maxWidth={false} 
            disableGutters
            >
            <AboutUs />
            <Social />
        </Container>
    </Box>
  )
}

export default HeaderBar
