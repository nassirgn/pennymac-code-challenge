import { ThemeProvider } from '@mui/material';
import GlobalStyles from './components/GlobalStyles';
import Layouts from './Layouts';
import Home from './pages/Home';

import theme  from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layouts>
        <Home />
      </Layouts>
    </ThemeProvider>
  );
}

export default App;
