import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import tariffs_bg from '../../assets/images/tariff-bg.jpg' 
import PricingCard from '../PricingCard/PricingCard';
import tariff_1 from '../../assets/images/tariff-1.png';
import tariff_2 from '../../assets/images/tariff-2.png';
import tariff_3 from '../../assets/images/tariff-3.png';
import tariff_4 from '../../assets/images/tariff-4.png';

const Container = styled(Box)(({theme})=>({
    width: '100%',
    height: 'auto',
    backgroundImage:`url(${tariffs_bg})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '40px 0 40px 0',
    [theme.breakpoints.down('md')]: {
        height: 'auto',
      },
}))
const cardData = [
    {
        title: 'STANDARD',
        price: 2,
        img: tariff_1
    },
    {
        title: 'BUSINESS',
        price: 2.7,
        img: tariff_2
    },
    {
        title: 'VIP',
        price: 5,
        img: tariff_3
    },
    {
        title: 'BUS-MINIVAN',
        price: 4.5,
        img: tariff_4
    }
]
const Tariffs = () => {
    return (
            <Container>
                    <Typography variant='h6' sx={{color: 'orange', fontWeight: '600', padding: '2px'}}>SEE OUR</Typography>
                    <Typography variant='h4' sx={{color: 'white', fontWeight: 'bold'}}>TARIFFS</Typography>
                <Grid container>
                    {
                        cardData.map(data=>(
                            <Grid item xs={12} md={3} sx={{display: 'flex',  justifyContent: 'center', pt: '20px'}}>
                                <PricingCard data={data}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
    );
};

export default Tariffs;