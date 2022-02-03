import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const ReviewCard = ({user:{name, img, address}}) => {
    return (
        <Stack alignItems='center'>
            <Paper sx={{height: '300px', width: '270px', display:'flex', flexDirection: 'column', alignItems:'center', padding:'50px'}}>
                <FormatQuoteIcon 
                fontSize='large' 
                sx={{
                    fontSize:'60px',
                     pb: '20px',
                     color: '#13C33E'
                    }}
                    >
                </FormatQuoteIcon>
                <Typography variant='subtittle1' sx={{textAlign: 'center', pb: '30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae deserunt molestias cum, libero mollitia inventore!</Typography>
                <Typography variant='h5' sx={{fontWeight:'600'}}>{name}</Typography>
                <Typography variant='subtittle1' sx={{color: 'gray'}}>{address}</Typography>
                
            </Paper>
            <Box 
                componant='div' 
                sx={{
                    height: '100px', 
                    width: '100px',
                    borderRadius: '50%',
                    backgroundImage: `url(${img})`,
                    backgroundPosition:'center',
                    backgroundRepeat: 'no-repeat',
                    mt: '-50px'
                    }}
                    >

                </Box>
            </Stack>
    );
};

export default ReviewCard;