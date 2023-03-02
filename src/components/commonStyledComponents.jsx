import * as React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';

export const MainPaper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  // [theme.breakpoints.down('md')]: {
  //   flexDirection: 'column',
  // },
}));

export const FlexDiv = styled('div')(({ theme }) => ({
  display: 'flex',
}));

export const FlexDivColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));



export const InputSelectDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent:"flex-start",
  margin:"10px 0px",
  alignItems:"center"
}));

export const MarginDiv = styled('div')(({ theme }) => ({
  margin: '20px 0',
}));

export const IconDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRight: `1px solid ${theme.custom.borderColor}`,
  padding: '8px',
  color: 'grey',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    color: '#1f7cd8',
  },
}));

export const MenuIconDiv = styled('div')(({ theme, open }) => ({
  padding: '15px 20px',
  display: 'flex',
  // justifyContent: open ? 'initial' : 'center',
  cursor: 'pointer',
  color: '#afa5d9',
  '&:hover': {
    color: 'white',
    borderLeft: '2px solid white',
  },
  // margin:"20px 0"
}));

export const SideBarText = styled('div')(({ theme, open }) => ({
  opacity: open ? 1 : 0,
  marginLeft: '15px',
}));

export const MainHeader = styled('div')(({ theme }) => ({
  marginTop: '64px',
}));

export const MainH1 = styled('h1')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '88px',
}));

export const MainH3 = styled('h3')(({ theme }) => ({
  // display:"flex",
  // justifyContent:"center"
}));

export const SidebarMargin = styled('div')(({ theme }) => ({
  width: '65px',
  height: '100%',
}));

export const ColorButton = styled(Button)(({ theme, width, marginTop }) => ({
  color: 'black',
  fontWeight: 600,
  width: width,
  padding: 10,
  borderRadius: '30px',
  marginTop: marginTop ? marginTop : '140px',
  backgroundColor: '#FDD78C',
  '&:hover': {
    backgroundColor: '#FDD78C',
  },
}));

export const MainTopicCard = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
  // borderRadius: '10px',
  width: '100%',
  height: '150px',
  // margin: '20px',
  cursor: 'pointer',
  // '&:hover': {
  //   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  // },
  // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}));

export const SecondaryTopicCard = styled('div')(({ theme }) => ({
  height: '180px',
  width: '220px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  padding: '10px',
  color: 'black',
  // borderRadius: '4px',
  fontWeight: '600',
  background: 'white',
  border: '1px solid #dedede',
  cursor: 'pointer',
  textAlign:'center',

  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}));



export const InputMarginTopDiv =  styled('div')(({ theme }) => ({
 margin:"15px 0"
}));
