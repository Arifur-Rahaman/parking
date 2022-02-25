import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import sub_header_bg from '../../assets/images/sub_header.jpg'

const SubHeader = ({title}) => {
    return (
        <Box >
            <Stack sx={{
            width:'100%',
            height:'100px',
        }} justifyContent='center' alignItems='center'>
                <Typography variant='h3'>{title}</Typography>
            </Stack>
        </Box>
    );
};

export default SubHeader;