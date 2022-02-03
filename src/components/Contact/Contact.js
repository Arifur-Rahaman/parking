import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactLocation from '../ContactLocation/ContactLocation';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <Box component='div'>
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