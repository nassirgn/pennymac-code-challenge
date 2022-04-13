import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyles from "./components/GlobalStyles";
import Layouts from "./Layouts";
import Home from "./pages/Home";

import theme from "./theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layouts>
          <Home />
        </Layouts>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
