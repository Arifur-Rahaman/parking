import { Avatar, Badge, Stack } from '@mui/material';
import React, { useContext } from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useNavigate } from 'react-router-dom';
import { accountStatusContext, authContext } from '../../App';
import { MainButton } from '../OwnerDetails/OwnerDetails';
const NavBar = () => {
    const [singedInUser, setSingedInUser] = useContext(authContext)
    const navigate = useNavigate();
    const [accountStatus, setAccountStatus] = useContext(accountStatusContext)

    const handleAccountSwitch = () => {
        if (accountStatus === 'driver') {
            navigate('/owner/request', { replace: true });
            setAccountStatus('owner')
        }
        else if (accountStatus === 'owner') {
            navigate('/driver', { replace: true })
            setAccountStatus('driver')
        }
    }

    return (
        <Stack
            direction='raw'
            alignItems='center'
            justifyContent='right'
            sx={{
                padding: '20px',
                borderBottom: '1px solid lightgray',
            }}
        >
            <MainButton variant='contained' sx={{ width: '150px' }} onClick={handleAccountSwitch}>{accountStatus === 'driver' ? 'Switch Owner' : 'Switch Driver'}</MainButton>
            <Avatar alt="Remy Sharp" src={singedInUser.photo} sx={{ m: '0 15px' }} />
            <Badge badgeContent={1} color="primary">
                <CircleNotificationsIcon color="action" sx={{ fontSize: '40px' }} />
            </Badge>
        </Stack>
    );
};

export default NavBar;