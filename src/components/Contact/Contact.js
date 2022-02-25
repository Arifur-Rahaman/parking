import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactLocation from '../ContactLocation/ContactLocation';
import Footer from '../Footer/Footer';
import SubHeader from '../SubHeader/SubHeader';

const Contact = () => {
    return (
        <Box component='div'>
            <SubHeader title={'Contact Us'}></SubHeader>
            <Box component='div' sx={{padding: '20px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <ContactInfo></ContactInfo>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm></ContactForm>
                    </Grid>
                </Grid>
            </Box>
            <ContactLocation></ContactLocation>
            <Footer></Footer>
        </Box>
    );
};

export default Contact;