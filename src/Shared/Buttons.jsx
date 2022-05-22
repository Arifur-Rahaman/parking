import { Button } from "@mui/material";
import {styled } from '@mui/system';

export const MainButton = styled(Button)(({theme})=>({
    padding:'8px 16px',
    fontSize: '14px',
    backgroundColor: '#13C33E',
    border: '1px solid #13C33E',
    color:'#fff',
    transition: 'all .3s',
    '&:hover': {
        backgroundColor: 'white',
        border: '1px solid #13C33E',
        color: '#13C33E'
    },
}))

export const SecondaryButton = styled(Button)(({theme})=>({
    padding:'4px 8px',
    fontSize: '12px',
    backgroundColor: '#333',
    border: '1px solid #333',
    color:'#fff',
    transition: 'all .3s',
    '&:hover': {
        backgroundColor: 'fff',
        border: '1px solid #333',
        color: '#333'
    }
}))