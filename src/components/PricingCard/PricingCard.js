import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
const CardPaper = styled(Paper)(({theme})=>({
    height: '300px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 15px',
    [theme.breakpoints.down('md')]: {
        height: '300px',
        width: '200px',
        mb: '10px'
      }
}))
const PricingCard = ({data}) => {
    const {img, title, price} = data;
    return (
        <CardPaper>
            <img src={img} alt="" />
            <Typography variant='h5' sx={{fontWeight: '600'}}>{title}</Typography>
            <Typography variant='subtittle1' sx={{textAlign: 'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus</Typography>
            <Typography sx={{fontWeight: 'bold'}} variant='h3'>${price}</Typography>
        </CardPaper>
    );
};

export default PricingCard;