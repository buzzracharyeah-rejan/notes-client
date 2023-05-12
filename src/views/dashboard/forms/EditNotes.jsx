import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const EditNotesForm = ({ payload }) => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({ title: 'test', content: 'content' });

  console.log(id);

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}
      maxWidth='lg'
    >
      <Paper sx={{ mt: '1.5rem', p: '1.5rem 2rem' }}>
        <Formik
          initialValues={initialValues}
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
          enableReinitialize
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
                <Typography variant='h6' textAlign='center' width='inherit' letterSpacing={1.5}>
                  Edit BucketList
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id='title'
                    name='title'
                    label='Title'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
      </Paper>
    </Container>
  );
};

export default EditNotesForm;
