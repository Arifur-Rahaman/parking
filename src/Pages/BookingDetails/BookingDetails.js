import {Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import NavBar from '../../components/NavBar/NavBar';
import Details from '../../components/Details/Details';
const BookingDetails = () => {
    return (
        <Box component='div' sx={{width: '100%'}}>
            <NavBar></NavBar>
            <Box componant='div' sx={{p: '60px'}}>
                <Grid container justifyContent='center'>
                    <Grid item  sx={{backgroundColor: 'whitesmoke', padding: '20px', width: '80%'}}>
                        <Typography align='center'>You booking has been confirmed.</Typography>
                    </Grid>
                </Grid>
                <Details></Details>
            </Box>
            
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>

        </Box>
    );
};

export default BookingDetails;