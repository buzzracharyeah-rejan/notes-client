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
import jwtToken from '../../services/jwt';

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

const Signin = () => {
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
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={yup.object({
            email: yup.string().email().required().label('Email').lowercase(),
            password: yup.string().required().label('Password'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await apiService.post('/auth/login', {
                email: values.email,
                password: values.password,
              });
              console.log(response);
              if (response.status === 200) {
                const { token } = response.data.data;
                jwtToken.saveToken(token.access.token, 'access_tkn');
                jwtToken.saveToken(token.refresh.token, 'refresh_tkn');
                setSubmitting(false);
                navigate('/');
              }
            } catch (error) {
              alert('Failed to login!');
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
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/signup' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Signin;
