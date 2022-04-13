import { createTheme, colors } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: "#502f84",
        contrastText: "#fff"
      },
      secondary: {
        main: "#edf2ff",
        contrastText: "#000"
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      },
      background: {
        paper: colors.common.white,
      },
    },
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: '-0.24px'
      },
      h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    
    }
  });

 export default theme