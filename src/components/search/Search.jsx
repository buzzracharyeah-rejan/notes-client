import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { SearchWrapper, SearchIconWrapper, StyledInputBase } from './search.styles.jsx';

const Search = () => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
    </SearchWrapper>
  );
};

export default Search;
