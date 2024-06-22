import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Grid, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import { ThemeProvider } from '@emotion/react';

export default function Sidebar({theme}) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Drawer variant="permanent" anchor="left" PaperProps={{ sx: { backgroundColor: 'white' } }}>
      <Button onClick={toggleSidebar}>T</Button>
        {
          sidebarOpen?
          (
            <List>
            {['Home', 'Images', 'Docs'].map((text, index) => (
              <ListItem button key={text}>
                {text}
              </ListItem>))}
            </List>
          ) : 
          (
            <ThemeProvider theme={theme}>
              <List>
                <ListItem>
                  <Button
                      variant="contained"
                      color="primary"
                  >
                    <HomeIcon/>
                  </Button>
                </ListItem>
              </List>
            </ThemeProvider>
          )
        }
   </Drawer>
  );
}