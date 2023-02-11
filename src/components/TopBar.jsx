import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MarketingContent } from '../pages/MarketingContent';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { MenuIconDiv } from './commonStyledComponents';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

export const TopBar = ({ handleDrawerOpen }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState('en');
  const handleLanguage = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              cursor:"pointer",
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
        <div style={{ marginLeft: '50px' }}>
          {/* <MenuIcon
            sx={{ color: '#4723d9', cursor: 'pointer' }}
            onClick={handleDrawerOpen}
          /> */}
        </div>
        <div style={{ color: 'black' }}>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={lang}
              onChange={(e) => handleLanguage(e)}
              sx={{ border:"none", height: 35 }}
            >
              <MenuItem value={'en'}>English </MenuItem>
              <MenuItem value={'es'}>Spanish</MenuItem>
              <MenuItem value={'hin'}>Hindi</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* <TopBar /> */}
        {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
      </Toolbar>
    </>
  );
};
