import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ImageGrid from './ImageGrid'; // ImageGridコンポーネントをインポート

export default function ContentTabs() {
  const theme = useTheme();

  const [value, setValue] = React.useState(0); // 選択中のタブを管理する状態

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Tags" />
        <Tab label="Images" />
        <Tab label="Encrypt" />
      </Tabs>

      {/* 選択中のタブに応じてImageGridを表示 */}
      {value === 1 && <ImageGrid />} 
    </Box>
  );
}