import { Box, Typography } from "@mui/material"
//import SkillLevel from "./SkillLevel"

const SkillSet = () => {
  return (

    <Box sx={{ py:3, px: { xs:5, sm:2, md:0 },
            borderTop:2, borderBottom:{ xs:2, sm:0 },
            borderColor: '#FFFFFF' 
        }} 
    >        
        <Box sx={{ display:'flex', flexDirection:'column',
                gap:4, py:1
            }}
        >
            <Box sx={{ boxShadow:2, borderRadius:10 }} >
                <Box 
                    sx={{ display:'flex', flexDirection:{xs:'column', sm:'row'},
                        flexWrap:'wrap', justifyContent:{xs:'center', sm:'space-between'},
                        alignItems:{xs:'center', sm:'flex-start'}, 
                        columnGap:{sm:13, md:15, lg:20}, rowGap:4, py:1
                    }}
                >
                    {/**
                     * className="flex flex-col sm:grid sm:grid-cols-2 
                    md:grid-cols-3 justify-center items-center sm:items-start sm:justify-between gap-x-5 gap-y-10 py-1"
                     */}
                    
                    {
                        {
                            frontend: [
                                {
                                    name: 'HTML',
                                    level: 90,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'CSS',
                                    level: 70,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'JavaScript',
                                    level: 70,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'React',
                                    level: 70,
                                    experience: "3 years experience"
                                },
                                {
                                    name: 'Tailwind',
                                    level: 85,
                                    experience: "3 years experience"
                                },
                                {
                                    name: 'Material UI',
                                    level: 85,
                                    experience: "2 years experience"
                                },
                            ],
                        }.frontend.map((skill, index) => (
                            <Box key={index} 
                                sx={{
                                    display:'flex', flexDirection:'column',
                                    justifyContent:{xs:'center', sm:'flex-start' },
                                     alignItems:{xs:'center', sm:'flex-start' }
                                }}
                            >
                                <Typography variant="h5" 
                                    sx={{ fontSize:{xs:'3rem'}, fontWeight:700 }}
                                >
                                    {skill.name}
                                </Typography>
                                    {/**
                                     * <SkillLevel level={skill.level} />
                                     */}
                                <Typography variant="body2" 
                                    sx={{ fontSize:'1.125rem', fontWeight:300 }}
                                >
                                    {skill.experience}
                                </Typography>
                            </Box>
                        ))
                    }

                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SkillSet
