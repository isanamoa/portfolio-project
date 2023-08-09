import { Box, Button, TextField } from "@mui/material"

const InputForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form is active')
  }

  return (
    <Box sx={{ width:{ xs:1, sm:1/2, md:2/5 }, 
          display:'flex', flexDirection:'column',
          justifyContent:{xs:'flex-start', sm:'center'}, 
          gap:2, px:{xs:3, sm:0}
        }}
    >
      {/**
       * `${displayForm ? "w-full px-10 sm:px-0 sm:w-[50%] lg:w-[40%] flex flex-col gap-4 justify-around sm:justify-center": 'hidden'}`
       */}
      <form onSubmit={handleSubmit}>
      
        <Box sx={{ pb:3 }} >
          
          <TextField
            name="userName"
            label="Your Name: "
            type="text"
            variant="standard"
            sx={{ width: 1, color:'gray', borderBottom:2, 
            borderBottomColor:'#4EE1A0' }}       
            required
          />
        
        </Box>

        <Box sx={{ pb:3 }}>
          
          <TextField
            name="userEmail"
            label="Your Email: "
            type="email"
            variant="standard"
            sx={{ width: 1, color:'gray', borderBottom:2, 
            borderBottomColor:'#4EE1A0' }}             
            required
          />

        </Box>

        <Box sx={{ pb:3 }}>
          <TextField
            name='userMessage'
            label="Enter Message: "
            placeholder="Message..."
            multiline
            maxRows={4}
            variant="standard"
            sx={{ width: 1, color:'gray', borderBottom:2, 
            borderBottomColor:'#4EE1A0' }}             
            required
          />
        </Box>

        <Box sx={{ display:'flex', justifyContent:'end', alignItems:'end' }} >

            <Button type="submit" 
                sx={{ color:'#FFF', '&:hover': {
                  color:'#4EE1A0',
                  bgcolor:'transparent'
                },
                borderBottom:1, 
                borderBottomColor:'#4EE1A0', borderRadius:0 
                }}
            >
              Send Message
            </Button>

        </Box>

      </form>
    </Box>
  )
}

export default InputForm
