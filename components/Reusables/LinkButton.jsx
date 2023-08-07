import { Link } from "@mui/material";

const LinkButton = ({ getRef, text }) => {
  return (
    <>
      <Link 
        href={getRef} 
        target="_blank"
        variant="body1"
        underline="none"
        rel="noopener"
        sx={{ color:'#FFFFFF', 
        pb:0.5,
        borderBottom:1,
        borderBottomColor:'#4EE1A0',
        '&:hover': {
            color: '#4EE1A0',
        }, }}
        >
        {text}
      </Link>
    </>
  )
}

export default LinkButton
