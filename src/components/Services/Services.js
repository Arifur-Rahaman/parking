import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import services_1 from '../../assets/images/services-1.png';
import services_2 from '../../assets/images/services-2.png';
import services_3 from '../../assets/images/services-3.png';
import services_4 from '../../assets/images/services-4.png';
import Tariffs from '../Tariffs/Tariffs';
import Footer from '../Footer/Footer';
import SubHeader from '../SubHeader/SubHeader';
const services =[
    {
        title: 'RAPID CITY TRANSFER',
        img: services_1
    },
    {
        title: 'BOOKING A HOTEL',
        img: services_2
    },
    {
        title: 'AIRPORT TRANSFER',
        img: services_3
    },
    {
        title: 'BAGGAGE TRANSFER',
        img: services_4
    }
]

const Services = () => {
    return (
        <Box componant='div' sx={{width: '100%'}}>
            <Grid container sx={{padding: '40px 0 40px 0'}}>
                <Grid titem xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Box componant='div' sx={{width: '50%'}}>
                        <Typography variant='h5' align = 'center' sx={{fontWeight: 'bold', color: 'gold'}}>WELCOME</Typography>
                        <Typography variant='h3' align = 'center' fontWeight='bold'>OUR SERVICES</Typography>
                        <Typography variant='subtitle1' align = 'center' sx={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos neque praesentium quasi. Ad obcaecati atque autem quia impedit iste aperiam dolore, provident nemo accusantium ratione, quisquam ea nisi molestiae quis.</Typography>
                    </Box>
                </Grid>
    
            </Grid>
            <Grid container sx={{padding: '20px'}}>
               {
                   services.map((service, i)=>{
                       const {img, title} = service;
                       return(
                            <Grid 
                            item xs={12} 
                            md={3} spacing={2} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems:'center', 
                                padding:'40px',
                                borderRight: i<3 ? '1px dotted gray': 'none'
                                }}
                                >
                                <img src={img} alt="" style={{paddingBottom:'10px'}}/>
                                <Typography variant='h6' sx={{fontWeight: 'bold', padding: '10px'}}>{title}</Typography>
                                <Typography align='center' variant='subtitle1' sx={{color: 'gray'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. optio corrupti rerum magni beatae molestiae totam!</Typography>
                            </Grid>
                       )
                   })
               }
                
            </Grid>
            <Tariffs></Tariffs>
            <Footer></Footer>
        </Box>
    );
};

export default Services;