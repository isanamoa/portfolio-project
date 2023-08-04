
import PreviewBody from './PreviewBody';
import { Box } from '@mui/material';
import PreviewTitle from './PreviewTitle';
import Link from "next/link";

const PreviewCard = ({ projectData }) => {
  const { title, dependency, projectLink, projectCode, projectImages } = projectData;
  return (
    <Box 
        sx={{ maxWidth:{xs:1, sm:'45%', md:'48%', lg:'30rem' }, 
          maxHeight:470, bgcolor:'#242424', boxShadow:2,
          position:'relative', p:2, my:3   
        }}
    >
      
      <PreviewBody projectImage={projectImages}/>
      
      <PreviewTitle projectTitle={{title, dependency}}/>
      
      <Box sx={{ width:1, position:{xs:'static', sm:'absolute'},
            top:{sm:'18%', md:'20%', lg:'35%'}, zIndex:1,
            
          }}
      >
        
        <Box sx={{ display:{xs:'flex',}, 
              flexDirection:{xs:'row', sm:'column'},
              justifyContent:{xs:'space-evenly', sm:'center'}, alignItems:'center',
              gap:2 
            }}
        >
          <Link href={projectLink} target="_blank" 
            style={{ display:'block', borderBottom:2,  borderBottomColor: 'green', 
            padding:2, color:'#FFF &hover:green', }}
            
          >
            View Project
          </Link>
          <Link href={projectCode} target="_blank" 
            style={{ display:'block', borderBottom:2, color:'green', borderBottomColor: 'green', p:1 }}
          >
            View Code
          </Link>
        </Box>
      </Box>  
    </Box>
  )
}

export default PreviewCard
