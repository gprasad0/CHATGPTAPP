import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../i18n';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d1' },
    },
  },
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
