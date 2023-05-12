import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Search from '../../components/search/Search';
import CustomButton from '../../components/button/CustomButton';
import { LogoContainer, ItemsContainer, ActionsContainer } from './appbar.styles';

import { settings } from '../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';

const BrandAppBar = () => {
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleModalOpen = () => {
    console.log('modal open');
    dispatch(openModal());
  };

  return (
    <Box sx={{ flexGrow: '1' }}>
      <AppBar position='static' elevation={0} sx={{ borderBottom: '1px solid #E0E0E0' }}>
        <Toolbar sx={{ background: '#fff', color: '#000', padding: '1.25rem 0' }}>
          <LogoContainer>
            <IconButton
              size='large'
              edge='start'
              color='primary'
              aria-label='menu'
              sx={{
                borderRadius: '50%',
                background: '#007FFF',
                color: '#fff',
                padding: '1rem',
                marginRight: 1,
                ':hover': {
                  background: '#7CB9E8',
                  color: '#fff',
                },
              }}
            >
              <TextSnippetIcon />
            </IconButton>
            <Typography
              variant='h5'
              component='div'
              letterSpacing={4}
              sx={{ color: '#505050', fontWeight: 700 }}
            >
              BUCKETS
            </Typography>
          </LogoContainer>

          <ItemsContainer>
            {/* user actions */}
            <ActionsContainer>
              <Search />
              <CustomButton label='Take Notes' onClickHandler={handleModalOpen} />
            </ActionsContainer>

            {/* Profile */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </ItemsContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BrandAppBar;
