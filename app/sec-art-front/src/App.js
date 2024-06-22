import './App.css';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header'
import ContentTabs from './components/ContentTabs';
import Sidebar from './components/Sidebar';
import { Grid, Box, Button } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ display: 'block' }}>
          <Grid container>
            <Grid item xs={1}>
              <Sidebar theme={theme}/>
            </Grid>
            <Grid item xs="auto">
              <Header />
              <ContentTabs />
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
