import React from 'react';
import './HowWork.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';

const WorkingDetail = styled(Paper)(({theme})=>({
    padding: '40px 10px',
    textAlign: 'center'
}))
export const List = styled(Typography)(({theme})=>({
    textAlign: 'center', 
    fontWeight: 'bold', 
}))
export const P = styled('p')(({theme})=>({
    textAlign: 'center',
    fontWeight: '500'
}))
const HowWork = (props) => {
    const showTittle = props.showTittle;
    const headlines = ["Save Money", "Save Time", "Save Stress"];
    const details = [
        "Save your money on our site compared to the cost of on-airport parking",
        "It's easy to compare parking at all major areas. Booking a reservation in quick and simple!",
        "Guarantee your parking spot by booking in advance and stay strees free in your working."
    ]
    return (
        <Box sx={{backgroundColor: 'whitesmoke', padding: '60px'}}>
            {showTittle && <List variant='h4' sx={{pb: '40px', color: '#13C33E'}}>How Does It Work?</List>}
            <Grid container spacing={2}>
                {
                    headlines.map((headline, i)=>(
                        <Grid item xs={12} sm={4} key={headline}>
                            <WorkingDetail>
                                <List  variant='h5'>{headline}</List>
                                <P sx={{fontSize:'18px'}}>{details[i]}</P>
                            </WorkingDetail>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default HowWork;