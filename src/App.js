import { ThemeProvider } from '@mui/material';
import GlobalStyles from './components/GlobalStyles';

import theme  from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <span style={{color: theme.palette.text.primary}}>Hello World</span>
    </ThemeProvider>
  );
}

export default App;
