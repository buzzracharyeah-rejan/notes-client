import { Container, Grid, Pagination, Paper, Box, Typography } from '@mui/material';

import UserStories from '../../components/card/Card';
import BrandAppBar from '../../layouts/appBar/AppBar';
import { notes } from '../../constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../store/actions/notesActions';

const Dashboard = () => {
  const { data, isLoading, error } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes('hello'));
  }, []);

  return (
    <>
      {isLoading ? (
        <Typography variant='h4'>Loading...</Typography>
      ) : (
        <>
          <BrandAppBar />
          {/* content */}
          <Paper elevation={0} sx={{ p: '1.25rem 2.5rem' }}>
            <Container maxWidth='lg' sx={{ padding: '1rem 2.5rem' }}>
              <Grid container rowSpacing={2} columnSpacing={2}>
                {data?.data?.map((note) => (
                  <Grid item key={note._id} xs={12} md={6} lg={4}>
                    <UserStories payload={note} dimensions={{ width: '400' }} />
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{
                  mt: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Pagination count={10} shape='rounded' />
              </Box>
            </Container>
          </Paper>
        </>
      )}
    </>
  );
};

export default Dashboard;
