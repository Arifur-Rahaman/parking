
import { Avatar, Badge, Stack, Typography } from '@mui/material';
import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };



const NavBar = () => {
    const navigate = useNavigate();
    const handleSwitch = ()=>{
        navigate("/owner/request", {
            replace: true
        })
    }
    return (
        <Stack direction='raw' alignItems= 'center' justifyContent='right'  sx={{padding:'10px 20px'}}>
            <button onClick={handleSwitch}>switch</button>
            <Switch {...label} />
            <Typography sx={{padding:'10px'}}>Switch Owner</Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Badge badgeContent={4} color="primary">
                <CircleNotificationsIcon color="action" sx={{fontSize:'40px'}} />
            </Badge>
        </Stack>
    );
};

export default NavBar;