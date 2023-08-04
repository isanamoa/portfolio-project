import { Box, Typography } from "@mui/material"

const SkillLevel = ({ level }) => {
  return (
    <Box className="w-3/4 bg-slate-200 mb-2 rounded-2xl text-xs">
        <Box className="bg-green-700 rounded-2xl text-right pr-3 text-white" style={{width: level +'%'}}>
            <Typography variant="body2" className="font-thin text-xs" >{level +'%'}</Typography>
        </Box>
    </Box>
  )
}

export default SkillLevel
