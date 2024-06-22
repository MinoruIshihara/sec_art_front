import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import ContentGrid from "./components/ContentGrid";
import Sidebar from "./components/Sidebar";
import { Box, CssBaseline, Grid, Button } from "@mui/material";

const theme = createTheme();

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ContentGrid />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
