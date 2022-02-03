import { Button, Card, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <Typography align='center' variant='h5'>SEND MESSEGE</Typography>
            <Paper sx={{background: 'white-smoke', padding: '10px 10px 50px 10px'}}>
                <form>
                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <TextField variant='outlined' label="Name" fullWidth placeholder='Name' name='name' required/>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField variant='outlined' label="Email" fullWidth placeholder='Email' name='email' required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-flexible"
                                label="Your text"
                                multiline
                                defaultValue="Your text......."
                                rows={4}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Button 
                            variant='contained' 
                            sx={{
                                backgroundColor: 'orange',
                                 color: 'black',
                                 width: '180px',
                                 borderRadius: '15px'
                                 }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
};

export default ContactForm;