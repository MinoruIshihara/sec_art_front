import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';

// サンプル画像データ（実際のデータに置き換えてください）
const itemData = [
  { img: 'image1.jpg', title: 'Image 1' },
  { img: 'image2.jpg', title: 'Image 2' },
  { img: 'image3.jpg', title: 'Image 3' },
  // ... 他の画像データ
];

export default function ImageGrid() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', overflowY: 'auto' }}>
      <Grid container spacing={2}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.img}>
            <ImageListItem>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
