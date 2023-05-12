import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Container, Grid, TextField } from '@mui/material';

const MockView = () => {
  return (
    <Container sx={{ mt: '1.5rem', p: '0.5rem 2rem' }} maxWidth='lg'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={yup.object({
          email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
          password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            <Grid container spacing={2} sx={{ p: '0.25rem', mb: '1.5rem' }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id='email'
                  name='email'
                  label='Email'
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id='password'
                  name='password'
                  label='Password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
            </Grid>
            <Button type='submit' disabled={isSubmitting} variant='outlined' color='primary'>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default MockView;
