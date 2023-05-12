import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const SearchWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  background-color: #f3f3f3;
  padding: 0.54rem;
  display: flex;
`;

export const SearchIconWrapper = styled.div`
  padding: 0.25rem;
`;

export const StyledInputBase = styled(InputBase)`
  width: 350px;
`;
