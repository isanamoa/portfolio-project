import React from 'react'
import { Box, CardContent, Typography } from '@mui/material'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'

const Carder = ({ icon, title, content }) => {

  return (
    <Box sx={{ width: 1 }} >
        <CardContent className='mb-1'>
            <Box className='flex gap-3 justify-between items-center'>
                <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div"
                    className='font-bold'>
                    {title}
                </Typography>
                <Box className="bg-green-800 p-1">
                    {icon}
                </Box>
            </Box>
            <Typography 
                    variant="body2" 
                    color="text.secondary"
                    component="div"
                    sx={{ minHeight: {xs: "50vh", md: "40vh"}, fontSize: 18 }}
                >
                {content}
            </Typography>
        </CardContent>
            
        {
            /**
             * <CardActions sx={{ pl:2 }}>
                    <Link href="" > 
                        Read More <ArrowForward size="small" />
                    </Link>
                </CardActions>
             */
        }
    </Box>
  )
}

export default Carder
