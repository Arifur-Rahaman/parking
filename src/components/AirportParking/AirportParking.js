import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../assets/images/img-featur-copyright.webp';
import { styled } from '@mui/system';

const Img = styled('img')(({theme})=>({
    width: '80%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
      },
}))

const AirportParking = () => {
    return (
        <Box componant='div' sx={{padding: '50px'}}>
            <Grid container>
                <Grid
                sx={{width: '50%'}} 
                item xs={12} md={6}
                >
                    <Img src={img} alt=''/>
                    
                </Grid>
                <Grid 
                item xs={12} 
                md={6}
                >
                    <Box 
                    componant='div'
                    sx={{
                        padding: '30px 0 30px 0'
                    }}
                    >
                        <Typography variant='h4' sx={{fontWeight:'bold'}}>We Makes</Typography>
                        <Typography variant='h4' sx={{fontWeight:'bold'}}>Airport Parking Easy</Typography>
                        <Typography sx={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quas, maiores deserunt, nisi est alias totam soluta similique quis id voluptatum voluptate. Unde, non? Aut, repellat, labore, repellendus minus provident doloribus totam sed facere nesciunt odit officiis quisquam fugit? Nihil vitae quidem quibusdam harum voluptatibus sed culpa quisquam, distinctio quasi?</Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AirportParking;