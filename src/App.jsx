import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import axios from 'axios';
import { SideTopBar } from './components/SideTopBar';
import { Sample1 } from './Sample1';
import { useTranslation } from 'react-i18next';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Sample2 } from './Sample2';

function App() {
  return (
    <>
      <SideTopBar />
      <Routes>
        <Route path='/' element={<Sample1 />} />
        {/* <Route path='/home' element={<Sample2 />} /> */}
      </Routes>
    </>
  );
}

export default App;
