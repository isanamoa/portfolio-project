import { Box, Button, Typography } from "@mui/material";

const HeaderMain = () => {
  return (
    <Box 
        sx={{ width:{lg:'70rem'}, mx:'auto', 
        display:'flex', position:'relative', top:-85, zIndex:1,
        flexDirection:{xs:'column-reverse', sm:'row' }, 
        justifyContent:{xs: 'center', sm: 'space-between'}, alignItems:'start',
        pl:2, py:0, gap:{xs:5, sm:0} }}
    >

        <Box sx={{ width: {xs:1, sm:1/2, md:3/5}, display: 'flex',
            flexDirection: {xs:'column', sm:'row'}, 
            gap:3, mt:{sm:14.5, lg:15.5}, 
            justifyContent: {xs:'center', sm:'space-between'},
            alignItems: {xs:'center', sm:"start"}
            }} >

            <Typography variant="h1" 
                sx={{ fontSize: {xs:'1.8rem', sm:'4.7rem', md:'4.7rem', lg:'5.5rem'},
                    fontWeight:700, 
                    lineHeight: {xs:'1.8rem', sm:'4.7rem', md:'4.7rem', lg:'5.5rem'}, 
                    letterSpacing: {xs:'-1.136px', sm:'-2.5px', lg:'-2.5px'},
                    position:{sm:"absolute", zIndex:1},
                    whiteSpace:"nowrap"
                }} 
            > 
                Nice to <br className="breakChangesm" /> meet you! <br className="breakChangelg"/>  
                I’m <br className="breakChangesm" /> 
                <span style={{ paddingBottom:1, borderBottom:"2px solid green" }} >
                    Nana Ansah
                </span>.
            </Typography>

            <Box sx={{ width:1, display:'flex',
                    flexDirection:{xs:'column'},
                    justifyContent:{xs:'center', sm:'start'},
                    alignItems:'center',
                    mt: {sm:30, lg:25} 
                }} 
            >
                <Box sx={{width:1}}>
                    
                    <Typography variant="body1" 
                    sx={{ fontSize:'1.0rem', textAlign:{xs:"center", sm:'left'}, fontWeight:500 }}
                    >
                        Based in Ghana, I’m a front-end developer <br className="breakChange"/> 
                        passionate about building accessible web <br className="breakChange" />
                        apps that users love.
                    </Typography>
                </Box>
                <Box sx={{width:1, display:'flex', justifyContent:{xs:'center', sm:'start'},
                    alignItems:'center', }}>
                    <Button  sx={{
                        borderBottom:2, color:'#FFFFFF',
                        borderBottomColor:'teal', borderRadius:0, 
                        mt:{xs:7, sm:5},
                        }}
                    >
                        CONTACT ME
                    </Button>
                </Box>
            </Box>
        </Box>

        <Box sx={{ position:'relative', width: { xs:1, sm:'21.866rem', md:'27.805rem' },
                display:'flex',
                flexDirection:'column', 
                pt:{xs:18, sm:10, lg:7},
                justifyContent:'center',
                alignItems:'center',
                bgcolor:{sm:"#242424"}
            }} 
        >
            <Box
                component="img" 
                alt="isanamoa" 
                src="/assets/images/isanamoa4.png" 
                variant="square"
                sx={{ position: 'relative', 
                border: 'none', 
                width: {xs: '10.888rem', sm:1}, 
                height: { xs:'15.125rem', sm: '30.375rem', md: '30.625rem'},
                filter: "grayscale(100%)", }}
            />

            <Box
                component="img" 
                alt="oval" 
                src="/assets/specIcons/Oval.svg" 
                sx={{ position: 'absolute', 
                border: 'none', 
                bottom:64, left:-64,
                display:{xs:'none', md:'block'}
                
                }}
            />
            <Box
                component="img" 
                alt="oval" 
                src="/assets/specIcons/Oval.svg" 
                sx={{ position: 'absolute', 
                border: 'none',
                bottom:0, right:-65,
                display:{lg:'none'}
                
                }}
            />
        </Box>
    </Box>
  )
}

export default HeaderMain
