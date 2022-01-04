import React, { useState } from 'react';
import './Header.css'
import SigninModal from '../SigninModal/SigninModal';
import {styled } from '@mui/system';
import bg from '../../assets/images/header.jpg'
import { Button, Container, Typography } from '@mui/material';

const HeaderContainer = styled('div')(({theme})=>({
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        height: '600px',
      },
    height: '200px',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0',
    textAlign: 'center'
}))
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = ()=>{
        setModalOpen(false)
    }
    console.log(modalOpen);
    return (
       <>
       <HeaderContainer>
                
            <Container sx={(theme)=>({
                [theme.breakpoints.down('md')]: {
                    padding: '50px',
                  },
                  padding: '150px 150px 20px 150px'
            })}
            >
                <Typography variant='h3' sx={(theme)=>({
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]:{
                        display: 'none'
                    }
                })}>
                    WE HAVE THE BEST DEALS FOR PARKING LOTS
                </Typography>
                <Typography variant='h6' sx={(theme)=>({
                    fontWeight: 'bold',
                    [theme.breakpoints.up('sm')]:{
                        display: 'none'
                    }
                })}>
                    BEST DEALS FOR PARKING
                </Typography>
                <Typography variant='h6'
                    sx={(theme)=>({
                        [theme.breakpoints.down('md')]:{
                            display: 'none'
                        }
                    })}
                >
                    Instantly book your space today. Trusted by millions
                </Typography>
                {!modalOpen &&<Button variant='contained' onClick={()=>setModalOpen(true)}>Singin</Button>}
            </Container>
            
            {modalOpen&&<SigninModal setModalOpen={closeModal}></SigninModal>}
        </HeaderContainer>
        </>
    );
};

export default Header;