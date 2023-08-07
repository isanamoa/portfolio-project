import { Box } from '@mui/material';

const PreviewBody = ({ projectImage }) => {
    
  return (
    <>
        <Box sx={{ width:1,
                position:'relative', 
            }}
        >
            {/**
             * className='relative w-full sm:hover:opacity-10'
             * className="relative w-5/6 left-10 z-0"
             */}
            {
                <>
                    <Box
                        component="img"
                        sx={{
                            position:'relative',
                            left:{xs:40, sm:43, md:55, lg:75},
                            zIndex:0,
                            width:5/6,
                        }}
                        alt="...."
                        src={projectImage[0]}
                    />
                    <Box
                        component="img"
                        sx={{
                            position:'absolute',
                            top:{xs:20, sm:20, md:30, lg:35},
                            left:0,
                            zIndex:1,
                            width:5/6,
                        }}
                        alt="...."
                        src={projectImage[1]}
                    />
                </>
            } 
        </Box>
    </>
  )
}

export default PreviewBody
