import logo from '../../assets/images/logo.png'
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Menu = () => {
  const [open, setOpen] = useState(false);
  const tokenId = localStorage.getItem('idToken')
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSignout = () => {
    localStorage.setItem('idToken', '');
    navigate('/login')
  }
  const itemListMain = [
    {
      text: 'Home',
      icon: <HomeIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/')
    },
    {
      text: 'About',
      icon: <InfoIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/about')
    },
    {
      text: 'Service',
      icon: <MiscellaneousServicesIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/services')
    },
    {
      text: 'Parking Options',
      icon: <LocalParkingIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/options')
    },
    {
      text: 'Contact',
      icon: <ContactPhoneIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/contact')
    },
  ]
  const itemListSub = [
    {
      text: 'Helps',
      icon: <ContactSupportIcon sx={{ fontSize: '35px' }} />,
      onclick: () => navigate('/help')
    }
  ]
  const navigate = useNavigate()
  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "#13C33E",
          color: "white",
        }
      }}
      open={open}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <Stack alignItems='center'>
        <img style={{ width: '70px', padding: '20px 0' }} src={logo} alt='' />
      </Stack>
      <Divider />
      {
        itemListMain.map(list => {
          const { text, icon, onclick } = list;
          return (
            <List>
              <ListItem button key={text} onClick={onclick}>
                <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </List>
          )
        })
      }
      <Divider />
      {
        itemListSub.map(list => {
          const { text, icon, onclick } = list;
          return (
            <List>
              <ListItem button key={text} onClick={onclick}>
                <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </List>
          )
        })
      }
      {
        tokenId
          ? <List>
            <ListItem button key='Logout' onClick={handleSignout}>
              <ListItemIcon>< LockOpenIcon sx={{ fontSize: '35px', color: 'white' }} /></ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
          </List>
          : <List>
            <ListItem button key='Login' onClick={() => navigate('/login')}>
              <ListItemIcon>< LockOpenIcon sx={{ fontSize: '35px', color: 'white' }} /></ListItemIcon>
              <ListItemText primary='Login' />
            </ListItem>
          </List>
      }

    </Drawer>

  );
};

export default Menu;