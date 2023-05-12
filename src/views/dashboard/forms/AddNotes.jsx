import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

const AddNotesForm = () => {
  return (
    <Container sx={{ mt: '1.5rem', p: '0.5rem 2rem' }} maxWidth='lg'>
      <Formik
        initialValues={{ title: '', content: '' }}
        validationSchema={yup.object({
          title: yup.string().required().label('Title'),
          content: yup.string().required().label('content'),
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
            <Grid
              container
              spacing={2}
              sx={{
                p: '0.25rem',
                mb: '1.5rem',
              }}
            >
              <Typography variant='h6' textAlign='center' maxWidth='inherit' letterSpacing={1.5}>
                Create BucketList
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id='title'
                  name='title'
                  label='Title'
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id='content'
                  name='content'
                  label='Content'
                  value={values.content}
                  maxRows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.content && Boolean(errors.content)}
                  helperText={touched.content && errors.content}
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

export default AddNotesForm;
