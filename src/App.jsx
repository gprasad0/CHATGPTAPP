import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import { SideTopBar } from './components/SideTopBar';
import { MarketingContent } from './pages/MarketingContent';
import { useTranslation } from 'react-i18next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

function App() {
  const theme = useTheme();
console.log("theme=====>",theme)
  return (
    <>
      <SideTopBar />
      <Routes>
        {/* <Route path='/' element={<MarketingContent />} /> */}
        {/* <Route path='/home' element={<Sample2 />} /> */}
      </Routes>
    </>
  );
}

export default App;
