import { ThemeProvider } from '@mui/material';
import theme  from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <span style={{color: theme.palette.text.primary}}>Hello World</span>
    </ThemeProvider>
  );
}

export default App;
