import { useState } from 'react';
import { Container, Grid, Pagination, Paper, Box } from '@mui/material';

import UserStories from '../../components/card/Card';
import BrandAppBar from '../../layouts/appBar/AppBar';
import { notes } from '../../constants';

const Dashboard = () => {
  return (
    <>
      <BrandAppBar />
      <Paper elevation={0} sx={{ p: '1.25rem 2.5rem' }}>
        <Container maxWidth='lg' sx={{ padding: '1rem 2.5rem' }}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {notes.map((note) => (
              <Grid item key={note.id} xs={12} md={6} lg={4}>
                <UserStories title={note.title} content={note.content} imageUrl={note.imageUrl} />{' '}
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{ mt: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Pagination count={10} shape='rounded' />
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Dashboard;
