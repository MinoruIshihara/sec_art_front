// ContentGrid.jsx
import React, { useState } from 'react';
import { Grid, Box, Tabs, Tab } from '@mui/material';
import ImageView from './ImageView';
import TagList from './TagList';
import EncryptConsole from './EncryptConsole';

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function ContentGrid() {
  const [contentTabValue, setValue] = useState(0); // 初期タブを Tags に変更

  const onContentTabChanged = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (contentTabValue) {
      case 0:
        return <TagList />;
      case 1:
        return <ImageView />;
      case 2:
        return <EncryptConsole />;
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={3} sx={{ width: '100%' }}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={contentTabValue} onChange={onContentTabChanged}>
            <Tab label="Tags" {...a11yProps(0)} />
            <Tab label="Images" {...a11yProps(1)} />
            <Tab label="Encrypt" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        {renderContent()} {/* タブに応じてコンテンツを表示 */}
      </Grid>
    </Grid>
  );
}

export default ContentGrid;
