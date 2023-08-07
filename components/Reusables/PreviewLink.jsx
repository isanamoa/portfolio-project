
import { Box } from "@mui/material"
import LinkButton from "./LinkButton"

const PreviewLink = ({ projectHref }) => {
  return (
    <Box sx={{ display:{xs:'flex',}, 
              flexDirection:{xs:'row', sm:'column'},
              justifyContent:{xs:'space-evenly', sm:'center'}, alignItems:'center',
              gap:2, opacity:{sm: 0}
            }}
            className="viewLink"
    >
        <LinkButton getRef={projectHref.projectLink} 
            text={"View Project"}
        />
        <LinkButton getRef={projectHref.projectCode} 
            text={"View Code"}
        />
        
        {/**
         * <Link href={projectLink} target="_blank" 
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
         */}
    </Box>
  )
}

export default PreviewLink
