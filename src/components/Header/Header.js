import './Header.css'
import {styled } from '@mui/system';
import bg from '../../assets/images/header.jpg'
import {Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { MainButton } from '../../Shared/Buttons';

const HeaderContainer = styled('div')(({theme})=>({
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        height: '600px',
      },
    [theme.breakpoints.up('md')]: {
        height: '800px',
      },
    height: '200px',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))
const Header = () => {
    //const [{email}, setSingedInUser] = useContext(authContext);
    const idToken = localStorage.getItem('idToken');
    return (
       <>
       {idToken&& <NavBar/>}
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
                        p: '20px 0',
                        [theme.breakpoints.down('md')]:{
                            display: 'none',
                        }
                    })}
                >
                    Instantly book your space today. Trusted by millions
                </Typography>
               {
               !idToken && <Link to='/login' style={{textDecoration:'none'}}>
                   <MainButton 
                   sx={{
                    p:'8px 16px',
                   fontSize:'16px', 
                   border:'2px solid #13C33E',
                   "&:hover": {
                    border:'2px solid #13C33E'
                  }
                }} 
                variant='contained'
                >
                    Singin
                </MainButton>
                </Link>
                }
            </Container>
        </HeaderContainer>
        </>
    );
};

export default Header;