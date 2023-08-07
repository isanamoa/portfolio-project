
import PreviewBody from './PreviewBody';
import { Box } from '@mui/material';
import PreviewTitle from './PreviewTitle';
import PreviewLink from './PreviewLink';

const PreviewCard = ({ projectData }) => {
  const { title, dependency, projectLink, projectCode, projectImages } = projectData;
  return (
    <Box 
        sx={{ maxWidth:{xs:1, sm:'45%', md:'48%', lg:'30rem' }, 
          maxHeight:470, bgcolor:'#242424', boxShadow:2,
          position:'relative', p:2, my:3   
        }}
        className="displayBox"
    >
      
      <PreviewBody projectImage={projectImages}/>
      
      <PreviewTitle projectTitle={{title, dependency}}/>
      
      <Box sx={{ width:1, position:{xs:'static', sm:'absolute'},
            top:{sm:'18%', md:'20%', lg:'35%'}, zIndex:1,
            
        }}
      >
        <PreviewLink projectHref={{projectLink, projectCode}} 
        />

      </Box>  
    </Box>
  )
}

export default PreviewCard
