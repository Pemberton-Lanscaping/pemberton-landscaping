'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { white, orange, black, red, blue, dark } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#434343",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    secondary: orange
  },
});

export {darkTheme, lightTheme};

