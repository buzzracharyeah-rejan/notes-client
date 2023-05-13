import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../../../services/api';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../../store/actions/notesActions';

const EditNotesForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({ title: '', content: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await apiService.get(`/notes/${id}`);
      if (response.status === 200) {
        const { title, body } = response.data.data;
        setInitialValues({ title, content: body });
      }
    }
    fetchData();
  }, [id]);

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
            dispatch(
              updateNote({
                targetId: id,
                payload: {
                  title: values.title,
                  body: values.content,
                  image_url:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3x7ipPBVvSRr4gpjgxh0yKC64dOjsxTa_WUQZIS4gbw&s',
                  author: '645ccb3eb4eac795a2270e62',
                },
              })
            );
            navigate('/');
            setSubmitting(false);
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
                    rows={4}
                    maxRows={6}
                    multiline
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
