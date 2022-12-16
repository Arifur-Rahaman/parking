import React, { useContext } from 'react';
import { Button, Card, Grid, Stack, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { authContext } from '../../context/authContext';
import Loader from '../../components/Loader/Loader';
const Login = () => {
    const navigate = useNavigate();
    const { handleAuthDataSubmit, authState } = useContext(authContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: yup.object({
            name: yup.string().max(15, "Must be 15 characters or less").required("Required"),
            email: yup.string().email("Invalid email address").required("Required"),
            phone: yup.string().required("Required"),
            password: yup.string().min(6, "Password is too short").required("Required"),
            confirmPassword: yup
                .string()
                .required('Please retype your password.')
                .oneOf([yup.ref('password'), null], "Passwords doesn't match")
        }),
        onSubmit: (values) => {
            handleAuthDataSubmit(values, 'signup')
        }
    })

    const { values, handleChange, handleSubmit, errors, handleBlur, touched } = formik
    const { name, email, phone, password, confirmPassword } = values
    const {isLoading} = authState
    if(isLoading){
        return <Loader/>
    }

    return (
        <Box
            componant='div'
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Stack
                justifyContent='center'
                alignItems='center'
                sx={{ width: '600px' }}>
                <Card
                    sx={{
                        padding: '20px',
                        border: '1px solid black'
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            pb: '10px',
                            color: '#13C33E'
                        }}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    placeholder='Name'
                                    name='name'
                                    onChange={handleChange}
                                    required
                                    size='small'
                                    value={name}
                                    onBlur={handleBlur}
                                    error={touched.name && errors.name?.length > 0}
                                    helperText={touched.name && errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    placeholder='Email'
                                    name='email'
                                    required
                                    size='small'
                                    value={email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && errors.email?.length > 0}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    placeholder='Phone'
                                    name='phone'
                                    required
                                    size='small'
                                    value={phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phone && errors.phone?.length > 0}
                                    helperText={touched.phone && errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type='password'
                                    variant='standard'
                                    fullWidth
                                    placeholder='Password'
                                    name='password'
                                    required
                                    value={password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && errors.password?.length > 0}
                                    helperText={touched.password && errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='standard'
                                    fullWidth
                                    placeholder='Confirm Password'
                                    required
                                    label='Confirm Password'
                                    type='password'
                                    size='small'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && errors.confirmPassword?.length > 0}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant='contained'
                                    fullWidth
                                    type='submit'
                                    sx={{ backgroundColor: '#13C33E' }}
                                >
                                    Register
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack
                                    direction='row'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Typography
                                        variant='subtitle1'
                                    >
                                        Already have an account?
                                    </Typography>
                                    <Button value='login' onClick={() => navigate('/login')}>
                                        Login
                                    </Button>

                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Stack>
        </Box>
    );
};

export default Login;