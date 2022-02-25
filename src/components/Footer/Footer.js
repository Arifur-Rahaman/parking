import { Grid, Paper, Stack, Typography } from '@mui/material';
import {Box, styled } from '@mui/system';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import logo from '../../assets/images/logo.png'
const Item = styled('div')(({theme})=>({
    paddingLeft: '20px',
    [theme.breakpoints.down('md')]: {
        pl: '0',
      },
    
}))
const Footer = () => {
    return (
            <Grid 
            container
            direction="row"
            justifyContent="space-between"
            xs={12} 
            sx={{backgroundColor: "#040720", padding: '60px 20px'}}
            >
                <Grid item xs={12} md={4}>
                    <Item>
                        
                        <Box >
                        <img src={logo} alt="" style={{width:'160px'}} />
                        </Box>
                       
                        <Typography variant='caption' sx={{color:'#808080'}}>We are the official provider of Airport parking. You can't park closer!</Typography>
                        <Stack  direction={{xs: 'column', md: 'row'}} spacing={1} sx={{paddingTop: '10px'}}>
                            <Paper sx={{backgroundColor: 'black', color: 'white', padding:'10px'}}> 
                                <Stack direction='row' spacing={1} sx={{justifyContent:'center', alignItems:'center'}}>
                                    <Box><AppleIcon/></Box>
                                    <Box>
                                        <Typography variant="body1"  sx={{fontSize: '12px'}}>Download On</Typography>
                                        <Typography variant='h6' sx={{fontSize: "18px"}}>APP STORE</Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                            <Paper sx={{backgroundColor:'black', color:'white', padding:'10px'}}>
                                <Stack direction='row' spacing={1} sx={{justifyContent:'center', alignItems:'center'}}>
                                    <Box>
                                        <GoogleIcon/>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{fontSize: '12px'}}>Download On</Typography>
                                        <Typography variant='h6' sx={{fontSize: '18px'}}>Google Play</Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Stack>
                        </Item>
                </Grid>
                <Grid item xs={12} md={8}>
                <Grid 
                container
                direction="row"
                justifyContent="space-between"
                spacing ={2}
                >
                    <Grid item xs={12} md={4}>
                        <Item>
                            <Typography variant="h6" sx={{color: 'white', paddingBottom: '10px'}}>Navigation</Typography>
                                {
                                    ["Home", "About", "Service", "Parking Options", "Contact Us"].map(navigation=>(
                                        <Stack direction='row' alignItems='center'>
                                            <Box component='div' sx={{height: '5px', width: '5px', borderRadius:'50%', backgroundColor:'green'}}/>
                                            <Typography sx={{color: '#808080', paddingLeft:'5px'}}>{navigation}</Typography>
                                        </Stack>
                                    ))
                                }
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                        <Typography variant="h6" sx={{color: 'white', paddingBottom:'10px'}}>Contact Info</Typography>
                        <Typography variant="caption" sx={{color: '#808080', paddingBottom: '5px'}}>Corporate office address:</Typography>
                        <Stack direction='row'>
                            <LocationOnIcon sx={{color: 'green', paddingTop: '5px'}}/>
                            <Box componat='div'>
                                <Typography variant='subtitle2' sx={{color: 'white'}}>13-B/B, 2nd Colony</Typography> 
                                <Typography variant='subtitle2' sx={{color: 'white'}}>Mirpur1, Dhaka, Bangladesh</Typography>
                            </Box> 
                        </Stack>
                        <Typography variant='caption' sx={{color: '#808080'}}>Customer Services:</Typography>
                        <Stack direction='row'>
                            <WhatsAppIcon sx={{color: 'green'}}/>
                            <Typography variant='subtitle2' sx={{color: 'white'}}>+8801826-751369</Typography>
                        </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                        <Typography variant="h6" sx={{color: 'white', paddingBottom:'10px'}}>Discover</Typography>
                        {
                            ["Help", "How It Works", "Contact Us"].map(discover=>(
                                <Stack direction='row' alignItems='center'>
                                    <Box component='div' sx={{height: '5px', width: '5px', borderRadius:'50%', backgroundColor:'green'}}/>
                                    <Typography sx={{color: '#808080', paddingLeft:'5px'}}>{discover}</Typography>
                                </Stack>
                            ))
                        }
                        </Item>
                    </Grid>

                    </Grid>
                </Grid>
            </Grid>
    );
};

export default Footer;