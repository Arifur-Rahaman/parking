import { 
    Avatar, 
    Box, 
    IconButton, 
    Menu, 
    MenuItem, 
    Stack, 
    Tooltip, 
    Typography 
} from '@mui/material';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { accountStatusContext} from '../../App';
import { MainButton } from '../../Shared/Buttons'
import jwt_decode from "jwt-decode";
const NavBar = () => {
    const token = localStorage.getItem('idToken')
    const decoded = jwt_decode(token);
    const settings = ['Profile', 'Dashboard'];
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuClick = (setting)=>{
        handleCloseUserMenu();
        if(setting==='Dashboard'){
            navigate(`../${setting.toLowerCase()}/${decoded.email}`)
        }
        else{
            navigate(`../${setting.toLowerCase()}`)
        }
    }

    return (
        <Stack
            direction='raw'
            alignItems='center'
            justifyContent='right'
            sx={{
                padding: '20px',
                gap: '12px',
                borderBottom: '1px solid lightgray',
            }}
        >
            <MainButton variant='contained' disabled={pathname ==='/driver'} onClick={()=>navigate('driver')}>Book Now </MainButton>
            {/* <Badge badgeContent={1} color="primary">
                <CircleNotificationsIcon color="action" sx={{ fontSize: '40px' }} />
            </Badge> */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={()=>handleMenuClick(setting)}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Stack>
    );
};

export default NavBar;