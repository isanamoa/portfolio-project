import { Box, Divider, Typography,  } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ width:{ xs:1, sm:1/2 }, 
          display:'flex', flexDirection:'column',
          justifyContent:'center', alignItems:'center',
          gap:2, pb:2, mb:5
        }} 
    >
      <Typography variant="h3" 
        sx={{ fontSize:'4.5rem', fontWeight:700 }}
      >Contact</Typography>

      <Typography variant="body2" 
        sx={{ fontSize:'1.125rem', textAlign:{xs:'center', sm:'left'} }}
      >
        I would love to hear about your project and how I <br className="breakChange"/>
        could help. Please fill in the form, and I’ll get back <br className="breakChange"/>
        to you as soon as possible.
      </Typography>
    </Box>
  )
}

export default ContactUs
