import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { SiFrontendmentor } from 'react-icons/si'
import SocialButton from "./SocialButton";

const Socials = () => {
  
  return (
    <Box sx={{ display:'flex', 
          flexDirection:'row-reverse', 
          alignItems:'center', columnGap:1, fontSize:'1.2rem'
        }}
    >
      <SocialButton 
        passRef={"https://twitter.com/Yannanahio?t=HmwNNt5qqgXXvX_ajhDbiw&s=08"} 
        icon={<Twitter size="small" />} 
      />
      <SocialButton 
        passRef={"https://www.linkedin.com/in/isaac-ansah-amoah-535759b0"} 
        icon={<LinkedIn size="small" />} 
      />
      <SocialButton 
        passRef={"https://www.frontendmentor.io/"} 
        icon={<SiFrontendmentor />} 
      />
      <SocialButton 
        passRef={"https://github.com/isanamoa"} 
        icon={<GitHub size="small" sx={{m:0}} />} 
      />
    
    </Box>
  )
}

export default Socials;
