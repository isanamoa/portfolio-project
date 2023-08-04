import {  Avatar, Box,  Button, Typography } from "@mui/material";
import Typist from "react-typist-component";

const HeaderMain = () => {
  return (
    <Box 
        sx={{ width:{lg:'75rem'}, mx:'auto', display:'flex', 
        flexDirection:{xs:'column-reverse', sm:'row' }, 
        justifyContent:{xs: 'center', sm: 'space-between'}, alignItems:'start',
        pl:2, pt:0, gap:{xs:5, sm:0}, mb:2 }}
    >

        <Box sx={{ width: {xs:1, sm:1/2, md:3/5}, display: 'flex',
            flexDirection: {xs:'column', sm:'row'}, 
            gap:3, mt:{sm:9}, 
            justifyContent: {xs:'center', sm:'space-between'},
            alignItems: {xs:'center', sm:"start"}
            }} >

            <Typography variant="h1" 
                sx={{ fontSize: {xs:'1.8rem', sm:'2.7rem', md:'4.7rem', lg:'5.8rem'},
                    fontWeight:700,
                    position:{sm:"absolute", zIndex:1},
                    whiteSpace:"nowrap"
                }} 
            > 
                Nice to meet you! <br />  
                I’m <span style={{ paddingBottom:1, borderBottom:"2px solid green" }} >
                    Nana Ansah
                    </span>.
            </Typography>

            <Box sx={{ width:1, display:'flex',
                    flexDirection:{xs:'column', sm:'row'},
                    justifyContent:{xs:'center', sm:'flex-start'},
                    alignItems:'center',
                    mt: {sm:15, md:20, lg:30} 
                }} 
            >
                <Typist 
                    typingDelay={300} 
                    cursor={<span className='cursor'>|</span>}
                    onTypingDone={false}
                    >
                    <Typography variant="body1" 
                    sx={{ textAlign:{xs:"center", sm:'left'}, fontWeight:500 }}
                    >
                        Based in Ghana, I’m a front-end developer <br className="hidden md:block"/> 
                        passionate about building accessible web apps <br className="hidden md:block" />
                        that users love.
                    </Typography>
                </Typist>
                <Button  sx={{ display:{xs:'block', sm:'none'},
                     borderBottom:2, color:'#FFFFFF',
                    borderBottomColor:'teal', borderRadius:0, mt:{xs:7, sm:10, md:12, lg:15},
                    }}
                >
                    CONTACT ME
                </Button>
            </Box>
        </Box>

        <Box sx={{ width: { xs:1, sm:'21.866rem', md:'27.805rem' },
                display:'flex',
                flexDirection:'column', 
                pt:{xs:15, sm:7},
                justifyContent:'center',
                alignItems:'center',
                bgcolor:{sm:"#242424"}
            }} 
        >
            <Box
                component="img" 
                alt="isanamoa" 
                src="/assets/images/isanamoa1.jpg" 
                variant="square"
                sx={{ position: 'relative', 
                border: 'none', 
                width: {xs: '10.888rem', sm:1}, 
                height: { xs:'15.125rem', sm: '30.375rem', md: '38.625rem'} }}
            />
            {/**
             *  className="sm:w-full"
                className="flex flex-col items-center justify-center 
            filter grayscale pt-20 sm:pt-16 sm:bg-[#242424]"
            */}
        </Box>
    </Box>
  )
}

export default HeaderMain
