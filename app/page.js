'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainView from "@/components/Body/MainView";
import { Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Space Grotesk',
      ],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', overflow:'hidden'}}>
        <Header />
        <MainView />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;