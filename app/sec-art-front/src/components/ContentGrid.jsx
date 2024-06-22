import { Grid, Paper, Button, ButtonGroup, Box, Tabs, Tab, Typography } from '@mui/material';
import { useState } from 'react';
import ImageView from './ImageView';

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function ContentGrid() {
  const [contentTabValue, setValue] = useState(1);

  const onContentTabChanged = (event, newValue) => {
    console.log("changed")
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid container spacing={3} sx={{width: '100%'}}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={contentTabValue} onChange={onContentTabChanged} >
            <Tab label="Tags" {...a11yProps(0)} />
            <Tab label="Images" {...a11yProps(1)} />
            <Tab label="Encrypt" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageView />
      </Grid>
    </Grid>
  );
}

export default ContentGrid;