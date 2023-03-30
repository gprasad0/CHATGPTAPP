import { useState, useEffect } from 'react';
import axios from 'axios';
import { SideTopBar } from './components/SideTopBar';
import { MarketingContent } from './pages/MarketingContent';
import { useTranslation } from 'react-i18next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { MainCardDashboard } from './pages/MainCardDashboard';
import { LoginPage } from './pages/Login';
import { useSelector } from 'react-redux';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { Handshake } from '@mui/icons-material';
import HandleGoogleAuth from './components/authComponents/HandleGoogleAuth';

function App() {
  const selector = useSelector((state) => state.auth);
  const theme = useTheme();


  
  useEffect(() => {
    //make axios call to
  }, []);
  console.log('theme=====>', theme);
  return (
    <>
      {selector.authenticated && <SideTopBar />}
      {/* <SideTopBar /> */}
      <Routes>
        <Route
          path='/assistant'
          element={
            // <ProtectedRoutes>
              <MarketingContent />
            // </ProtectedRoutes>
          }
        />
        <Route
          path='/home'
          element={
            // <ProtectedRoutes>
              <MainCardDashboard />
            // </ProtectedRoutes>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home/googleAuth' element={<HandleGoogleAuth />} />

        {/* <Route path='/payment' element={<LoginPage />} /> */}
       
        <Route path='*' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
