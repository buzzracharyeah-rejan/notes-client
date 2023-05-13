import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createNote } from '../../../store/actions/notesActions';
import { useNavigate } from 'react-router-dom';

const AddNotesForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container
      maxWidth='lg'
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}
    >
      <Paper sx={{ mt: '1.5rem', p: '1.5rem 2rem' }}>
        <Formik
          initialValues={{ title: '', content: '' }}
          validationSchema={yup.object({
            title: yup.string().required().label('Title'),
            content: yup.string().required().label('content'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              createNote({
                title: values.title,
                body: values.content,
                image_url:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3x7ipPBVvSRr4gpjgxh0yKC64dOjsxTa_WUQZIS4gbw&s',
                author: '645ccb3eb4eac795a2270e62',
              })
            );
            navigate('/', { replace: true });
            setSubmitting(false);
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
                <Typography
                  variant='h6'
                  textAlign='center'
                  letterSpacing={1.5}
                  sx={{ width: 'inherit' }}
                >
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
                    rows={6}
                    multiline
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.content && Boolean(errors.content)}
                    helperText={touched.content && errors.content}
                  />
                </Grid>
              </Grid>
              <Button type='submit' disabled={isSubmitting} variant='contained' color='primary'>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default AddNotesForm;
