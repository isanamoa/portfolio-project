import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { SiFrontendmentor } from 'react-icons/si'
const Socials = () => {
  
  return (
    <Box sx={{ display:'flex', color:'#FFFFFF',
          flexDirection:'row-reverse',
          alignItems:'center', columnGap:2, fontSize:'1.2rem'
        }}
    >
        <Link href={"https://twitter.com/Yannanahio?t=HmwNNt5qqgXXvX_ajhDbiw&s=08"} target="_blank">
          <Twitter size='small' />
        </Link>
        <Link href={"https://www.linkedin.com/in/isaac-ansah-amoah-535759b0"} target="_blank">
          <LinkedIn size='small' />
        </Link>
        <Link href={"https://www.frontendmentor.io/"} target="_blank">
          <SiFrontendmentor  />
        </Link>
        <Link href={"https://github.com/isanamoa"} target="_blank">
          <GitHub size='small' />
        </Link>
    </Box>
  )
}

export default Socials;
