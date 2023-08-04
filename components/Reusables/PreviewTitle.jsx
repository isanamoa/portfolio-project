
import { Box, Typography } from "@mui/material";

const PreviewTitle = ({ projectTitle }) => {
  
  return (
    <Box sx={{ p:2, fontSize:'0.7rem', mt:1 }} >

        <Typography variant="h5" 
          sx={{ fontSize:'1.5rem', fontWeight:700, my:2 }}
        >
          {projectTitle.title}
        </Typography>
        <Box 
          sx={{ display:'flex', flexWrap:'wrap',
            justifyContent:'flex-start', alignItems:'center',
           gap:1, fontSize:'1.125rem', 
          }}
        >
            {
              projectTitle.dependency.map((value, index) =>(
                <Typography className="p-1" key={index}>{value}</Typography>
              ))
            }
            
        </Box>
    </Box>
  )
}

export default PreviewTitle
