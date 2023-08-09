import { Box, } from "@mui/material";

import HeaderBar from "./HeaderBar";
import HeaderMain from "./HeaderMain";

const Header = () => {
    return (
      <Box sx={{ position:'relative', top:0, 
         bgcolor:'', overflow:'hidden',
        }} 
      >
        <Box sx={{position:'relative',   top:{xs:115, sm:50, lg:70},}}>
          <Box
            component="img" 
            alt="oval" 
            src="/assets/specIcons/Oval.png" 
            sx={{ position: 'relative', 
            width:{xs:'13rem', sm:'15rem', lg: '30rem'},            
            height:'5rem',
            left:0, top:50,            
            }}
          />    
          <Box
            component="img" 
            alt="oval" 
            src="/assets/specIcons/Oval.png" 
            sx={{ position: 'absolute', 
            width:{xs:'13rem', sm:'15rem', lg: '30rem'},            
            height:'5rem',
            left:0, top:38,            
            zIndex:1          
            }}
          /> 
          <Box
            component="img" 
            alt="oval" 
            src="/assets/specIcons/Oval.png" 
            sx={{ position: 'absolute', 
            width:{xs:'13rem', sm:'15rem', lg: '30rem'},            
            height:'5rem',
            left:0, top:26,            
            zIndex:1          
            }}
          /> 
          <Box
            component="img" 
            alt="oval" 
            src="/assets/specIcons/Oval.png" 
            sx={{ position: 'absolute', 
            width:{xs:'13rem', sm:'15rem', lg: '30rem'},            
            height:'5rem',
            left:0, top:14,            
            zIndex:1          
            }}
          /> 
          <Box
            component="img" 
            alt="oval" 
            src="/assets/specIcons/Oval.png" 
            sx={{ position: 'absolute', 
            height:'5rem',
            width:{xs:'13rem', sm:'15rem', lg: '30rem'},            
            left:0, top:2,            
            zIndex:1          
            }}
          /> 
          
        </Box>
        <HeaderBar />
        <HeaderMain />   
        
      </Box>
    )
  }
  
  export default Header;