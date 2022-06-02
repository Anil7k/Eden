import React from 'react';
import StepperContainer from './stepper/index';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
const theme = createTheme();

function App() {
  return <StyledEngineProvider injectFirst={true}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <StepperContainer />
      </React.Fragment>
    </ThemeProvider>
  </StyledEngineProvider>;
}

export default App;
