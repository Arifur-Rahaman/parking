
import { Avatar, Badge, Button, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { accountStatusContext, authContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Switch demo' } };



const NavBar = () => {
    const [singedInUser, setSingedInUser] = useContext(authContext)
    const navigate = useNavigate();
    const [accountStatus, setAccountStatus] = useContext(accountStatusContext)

    const handleAccountSwitch = ()=>{
        if(accountStatus==='driver'){
            navigate('/owner/request', {replace: true});
            setAccountStatus('owner')
        }
        else if(accountStatus==='owner'){
            navigate('/driver', {replace: true})
            setAccountStatus('driver')
        }
    }

    return (
        <Stack direction='raw' alignItems= 'center' justifyContent='right'  sx={{padding:'10px 20px'}}>
            <Button variant='contained' sx={{backgroundColor: '#13C33E', '&:hover': {backgroundColor: "black"}}} onClick={handleAccountSwitch}>{accountStatus === 'driver'? 'Switch Owner': 'Switch Driver'}</Button>
            <Avatar alt="Remy Sharp" src={singedInUser.photo}/>
            <Badge badgeContent={1} color="primary">
                <CircleNotificationsIcon color="action" sx={{fontSize:'40px'}} />
            </Badge>
        </Stack>
    );
};

export default NavBar;