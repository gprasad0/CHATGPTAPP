import { useState, useEffect } from 'react';
import axios from 'axios';
import { SideTopBar } from './components/SideTopBar';
import { MarketingContent } from './pages/MarketingContent';
import { useTranslation } from 'react-i18next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { MainCardDashboard } from './pages/MainCardDashboard';
import { LoginPage } from './pages/Login';

function App() {
  const theme = useTheme();
console.log("theme=====>",theme)
  return (
    <>
      <SideTopBar />
      <Routes>
        <Route path='/assistant' element={<MarketingContent />} />
        <Route path='/home' element={<MainCardDashboard />} />
        <Route path='/login' element={<LoginPage />} />
        
      </Routes>
    </>
  );
}

export default App;
