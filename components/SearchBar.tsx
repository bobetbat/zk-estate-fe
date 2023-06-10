import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label="Search by location"
      variant="outlined"
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
