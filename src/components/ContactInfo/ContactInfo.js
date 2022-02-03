import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/system';

const ContactInfo = () => {
    return (
        <Stack  spacing={2}>
            <Stack direction='row' alignItems='center'>
                <Typography variant='h6' sx={{color: 'orange', pr:'5px'}}>OPENING HOURS:</Typography>
                <Typography variant='h4'>24/7</Typography>
            </Stack>
            <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit et dolorem necessitatibus numquam tempore minus distinctio dolore illo, dignissimos eaque.</Typography>
            <Stack direction='row'>
                <PhoneIcon sx={{color: 'orange', pr:'5px'}}></PhoneIcon>
                <Typography variant='h6'>+8801727920991</Typography>
            </Stack>
            <Stack direction='row'>
                <LocationOnIcon sx={{color: 'orange', pr:'5px'}}></LocationOnIcon>
                <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>13-B/B, Second Colony, Majar Road, Mirpur1, Dhaka</Typography>
            </Stack>
            <Box>
                <Typography variant='subtitle2'>Social</Typography>
                <Stack direction='row'>
                    <FacebookIcon sx={{color: '#4267B2', pr:'5px'}}></FacebookIcon>
                    <YouTubeIcon sx={{color: 'red', pr:'5px'}}></YouTubeIcon>
                    <TwitterIcon sx={{color: '#1DA1F2', pr:'5px'}}></TwitterIcon>
                    <InstagramIcon sx={{color: '#C13584'}}></InstagramIcon>
                </Stack>
            </Box>
            <Box>
                <Button 
                variant='outlined'
                 sx={{
                     color: 'black',
                     border: '2px solid black',
                     borderRadius: '15px'
                     }}
                >
                    Get Online Parking
                </Button>
            </Box>
        </Stack>
    );
};

export default ContactInfo;