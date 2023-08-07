import { Link } from "@mui/material";

const SocialButton = ({ passRef, icon }) => {
  return (
    <>
      <Link 
        href={passRef} 
        target="_blank"
        variant="body1"
        underline="none"
        rel="noopener"
        sx={{ color:'#FFFFFF', 
        p:1,
        '&:hover': {
          backgroundColor: '#000',
        }, }}
        >
        {icon}
      </Link>
    </>
  )
}

export default SocialButton;
