import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';

import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { cardSettings, settings } from '../../constants';
import { MENU_SETTING } from '../../constants/enum';
import useAlertDialog from '../../hooks/useAlertDialog';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../store/actions/notesActions';

const UserStories = ({ dimensions, payload }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getConfirmation } = useAlertDialog();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDelete = async () => {
    const isConfirm = await getConfirmation({
      title: 'Delete User',
      message: 'Are you sure you want to delete the note ?',
    });

    if (isConfirm) {
      try {
        dispatch(deleteNote(payload._id));
      } catch (err) {
        // handleOpenSnackbar({ message: err.message, alertType: 'error' });
      }
    }
  };

  const handleMenuItemClick = (event) => {
    const { menuType } = event.currentTarget.dataset;
    switch (menuType) {
      case MENU_SETTING.edit:
        navigate(`/notes/edit/${payload._id}`);
        break;

      case MENU_SETTING.delete:
        handleDelete();
        break;
    }
    handleCloseUserMenu();
  };

  return (
    <Card sx={{ maxWidth: dimensions.width }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='cardSettings' onClick={handleOpenUserMenu}>
            <MoreVertIcon />
          </IconButton>
        }
        title={payload.title}
        subheader='September 14, 2016'
      />
      <Menu
        sx={{ mt: '45px' }}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {cardSettings.map((setting) => (
          <MenuItem key={setting} onClick={handleMenuItemClick} data-menu-type={setting}>
            <Typography textAlign='center'>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <CardMedia component='img' height='194' image={payload.image_url} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {payload.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserStories;
