import {
  Container,
  Typography,
  Link,
  CssBaseline,
  Box,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import apiService from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box sx={{ p: 0.5, mt: 1.5 }}>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            validationSchema={yup.object({
              firstName: yup.string().required().label('FirstName'),
              lastName: yup.string().required().label('LastName'),
              email: yup.string().email().required().label('Email').lowercase(),
              password: yup.string().required().label('Password'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await apiService.post('/auth/signup', {
                  username: `${values.firstName} ${values.lastName}`,
                  email: values.email,
                  password: values.password,
                });
                if (response.status === 201) {
                  navigate('/login');
                }
              } catch (error) {
                alert('Failed to signup!');
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete='given-name'
                      name='firstName'
                      required
                      fullWidth
                      id='firstName'
                      label='First Name'
                      autoFocus
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id='lastName'
                      label='Last Name'
                      name='lastName'
                      autoComplete='family-name'
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      autoComplete='new-password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                </Grid>
                <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link href='/login' variant='body2'>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Signup;
