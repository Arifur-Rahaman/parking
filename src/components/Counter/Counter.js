import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

export const CounterBox=styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]:{
        paddingTop: '20px'
    }

}))

const Counter = () => {
    return (
        <Box sx={{backgroundColor: 'whitesmoke', paddingTop: '30px', pb:'30px', marginTop:'30px'}}>
        <Grid container>
            <Grid xs={6} sm={3} item spacing={2}>
                <CounterBox>
                    <AddLocationIcon sx={{color: 'green', fontSize:'40px'}}/>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>10,000+</Typography>
                    <Typography variant='body2'>Parking Locations</Typography>
                </CounterBox>
            </Grid>
            <Grid xs={6} sm={3}item spacing={2}>
                <CounterBox>
                    <EmojiEmotionsIcon sx={{color: 'green', fontSize:'40px'}}/>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>95%</Typography>
                    <Typography variant='body2'>Customer Satisfaction</Typography>
                </CounterBox>
            </Grid>
            <Grid xs={6} sm={3} item spacing={2}>
                <CounterBox>
                    <StarIcon sx={{color: 'green', fontSize:'40px'}}/>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>5</Typography>
                    <Typography variant='body2'>Star Rated App</Typography>
                </CounterBox>
            </Grid>
            <Grid xs={6} sm={3} item spacing={2}>
                <CounterBox>
                    <GroupIcon sx={{color: 'green', fontSize:'40px'}}/>
                    <Typography variant='h6' sx={{fontWeight: 'bold'}}>25,000</Typography>
                    <Typography variant='body2'>Monthly User</Typography>
                </CounterBox>
            </Grid>
        </Grid>
        </Box>
    );
};

export default Counter;