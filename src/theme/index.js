import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#502f84",
      contrastText: "#fff",
    },
    grey: {
      300: "#e0e0e0",
    },
    background: {
      paper: colors.common.white,
    },
  },
  typography: {
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px'
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: "-0.06px",
    },
  },
});

export default theme;
