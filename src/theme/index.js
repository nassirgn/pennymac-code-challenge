import { createTheme, colors } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: "#0052cc",
        contrastText: "#fff"
      },
      secondary: {
        main: "#edf2ff",
        contrastText: "#000"
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    typography: {
      h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    }
  });

 export default theme