
import { Box } from "@mui/material";
import ContactUs from "../Reusables/ContactUs";
import InputForm from "../Reusables/InputForm";
import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
//import { useState } from "react";

const Footer = () => {
  /*
  const [displayForm, setDisplayForm] = useState(false);
  const openForm = ()=>{
    setDisplayForm(prev=>!prev)
  }
  */
  return (
    <Box sx={{ bgcolor:"#242424", py:2 }} >

      <Box sx={{ width: { lg:'70rem' }, mx:'auto', py:2,
          display:'flex', flexDirection:{xs:'column', md:'row'},
          justifyContent:'center', alignItems:"center",
          borderBottom:2, borderBottomColor:'white', 
        }}
      >
        <ContactUs />
        <InputForm />
      </Box>

      <Box sx={{ width: { lg:'70rem' }, mx:'auto', py:2, 
          px:{xs:2, sm:0},
          display:'flex', flexDirection:{xs:'column', sm:'row'},
          justifyContent:{xs:'center', sm:'space-between'}, alignItems:"center",
        }}
      >
        <AboutUs />
        <Social />
      </Box>
    </Box>
  )
}

export default Footer;
