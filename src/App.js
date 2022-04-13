import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { StylesProvider, jssPreset } from '@mui/styles'
import rtl from 'jss-rtl'
import { create } from 'jss'
import GlobalStyles from "./components/GlobalStyles";
import Layouts from "./Layouts";
import Home from "./pages/Home";

import theme from "./theme";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
})

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <GlobalStyles />
        <Layouts>
          <Home />
        </Layouts>
        </StylesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
