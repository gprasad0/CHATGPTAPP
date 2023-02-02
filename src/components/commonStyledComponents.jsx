import * as React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const FlexDiv = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const IconDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRight: `1px solid ${theme.custom.borderColor}`,
  padding: '2px',
  color: 'grey',
}));

export const MenuIconDiv = styled('div')(({ theme, open }) => ({
  padding: '15px 20px',
  // display: 'flex',
  // justifyContent: open ? 'initial' : 'center',
  cursor: 'pointer',
  color: '#afa5d9',
  '&:hover': {
    color: 'white',
    borderLeft: '2px solid white',
  },
  // margin:"20px 0"
}));


export const MainHeader = styled('div')(({ theme }) => ({
  marginTop:"64px"
}));

export const MainH1 = styled('h1')(({ theme }) => ({
  display:"flex",
  justifyContent:"center"
}));

export const MainH3 = styled('h3')(({ theme }) => ({
  // display:"flex",
  // justifyContent:"center"
}));

export const SidebarMargin = styled('div')(({ theme }) => ({
  width: '65px', height: '100%'
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color:"black",
  fontWeight:600,
  width:400,
  padding:10,
  borderRadius:"30px",
  backgroundColor: "#FDD78C",
  '&:hover': {
    backgroundColor: "#FDD78C",
  },
}));
