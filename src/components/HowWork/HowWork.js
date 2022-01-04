import React from 'react';
import './HowWork.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';

const WorkingDetail = styled(Paper)(({theme})=>({
    padding: '10px',
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
        "Save upto 70% on our site compared to the cost of on-airport parking",
        "It's easy to compare parking at all major airports. Booking a reservation in quick and simple!",
        "Guarantee your parking spot by booking in advance. Can't make it? Cancellations are free."
    ]
    return (
        <Box sx={{backgroundColor: 'whitesmoke', padding: '20px 10px'}}>
            {showTittle && <List variant='h4' sx={{paddingBottom: '20px'}}>How Does It Work?</List>}
            <Grid container spacing={2}>
                {
                    headlines.map((headline, i)=>(
                        <Grid item xs={12} sm={4}>
                            <WorkingDetail>
                                <List variant='h6'>{headline}</List>
                                <P>{details[i]}</P>
                            </WorkingDetail>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default HowWork;