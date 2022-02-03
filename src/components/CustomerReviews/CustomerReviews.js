import {Typography } from '@mui/material';
import {Box, styled } from '@mui/system';
import Carousel from 'react-elastic-carousel'
import React from 'react';
import carousel_bg from '../../assets/images/carousel_bg.jpg'
import ReviewCard from '../ReviewCard/ReviewCard';
import customer_1 from '../../assets/images/customer_1.jpg'
import customer_2 from '../../assets/images/customer_2.jpg'
import customer_3 from '../../assets/images/customer_3.jpg';
import './CustomerReviews.css'
const Container = styled(Box)(({theme})=>({
    backgroundImage:`url(${carousel_bg})`,
    width: '100%',
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))

 const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

const Title = styled(Typography)(({theme})=>({
    color: 'white',
    fontWeight: 'bold'
}))
const users = [
    {
        name: 'AL Mahin',
        img: customer_1,
        address: 'Mirpur'
    },
    {
        name: 'SA Ziauddin',
        img: customer_2,
        address: 'Ghulsan'
    },
    {
        name: 'ES Rony',
        img: customer_3,
        address: 'Mohammadpur'
    }
]
const CustomerReviews = () => {
    return (
        <Container>
            <Title variant='h4'>Whats Our</Title>
            <Title variant='h4' sx={{pb: '30px'}}>Customer Says</Title>
            <Box componant='div' sx={{width: '100%'}}>
                <Carousel 
                     showArrows={false}
                     itemsToShow={3} 
                     itemsToScroll={1}
                     breakPoints={breakPoints}
                     >
                        {
                            users.map(user=>(
                                <ReviewCard user={user}></ReviewCard>
                            ))
                        }
                        {
                            users.map(user=>(
                                <ReviewCard user={user}></ReviewCard>
                            ))
                        }
                </Carousel>
                </Box>
        </Container>
    );
};

export default CustomerReviews;