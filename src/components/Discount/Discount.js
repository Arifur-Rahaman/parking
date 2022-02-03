import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Box } from '@mui/system';
import React from 'react';
import discount_bg from '../../assets/images/discount-bg.jpg';
import { MainButton } from '../OwnerDetails/OwnerDetails';
const Container = styled(Box)(({theme})=>({
    width: '100%',
    height: '400px',
    backgroundImage:`url(${discount_bg})`,
}))
const Discount = () => {
    return (
        <Box component='div' sx={{width: '100%'}}>
            <Container>
                <Stack sx={{height: '100%'}} direction='column' justifyContent='center' alignItems='center'>
                    <Typography 
                        variant='h3'
                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            paddingBottom: '20px'
                        }}
                    >
                        Save Up To 30%!
                    </Typography>
                    <Box component='div' sx={{width: '60%'}}>
                    <Typography
                     variant='body1' 
                     sx={{
                         textAlign: 'center', 
                         color: 'lightgray',
                         pb: '20px',
                         }}>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi illum debitis explicabo laudantium dignissimos esse saepe, mollitia, enim iste omnis voluptas itaque in voluptates et quasi ratione cumque blanditiis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil, odit optio.
                        </Typography>
                    </Box>
                    <MainButton sx={{color: 'white', width: '150px', height: '40px'}}>Book Now</MainButton>
                </Stack>
            </Container>
        </Box>
    );
};

export default Discount;