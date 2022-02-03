import { Grid, Paper, Stack, Typography } from '@mui/material';
import img from '../../assets/images/history.webp'
import React from 'react';

const History = () => {
    return (
        <Grid container  spacing={8} sx={{padding: '50px'}}>
            <Grid item xs={12} md={6} sx={{display: 'flex'}}> 
                <Stack justifyContent='center'>
                    <Typography variant='h3' sx={{pb: '10px'}}>Our History</Typography>
                    <Typography variant='body1' sx={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae blanditiis cum, quis dolore aut maxime obcaecati a dolores facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, et nostrum impedit ipsa velit assumenda laboriosam consequatur quos dolorem? Rem.</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper sx={{padding: '30px'}}>
                    <Typography variant='h4' sx={{pb: '10px', fontWeight:'bold'}}>2006-2008</Typography>
                    <Typography variant='subtitle1' sx={{ textAlign: 'justify', pb: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi tempora saepe cum debitis officiis voluptas vitae, cumque odio placeat ab rerum, quis illo? Modi nobis labore saepe sequi expedita eveniet eius deserunt voluptatibus numquam nostrum id aperiam laboriosam eligendi illum alias, ratione dolorum. Ullam possimus rem voluptas aperiam perferendis.</Typography>
                    <img src={img} alt='' style={{width: '100%'}}></img>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default History;