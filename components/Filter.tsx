import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
interface Options {
  [key: string]: string[];
}
interface FilterCheckboxesProps {
  searchParams: { [key: string]: string | string[] | undefined };
  options: Options;
  onChange: (filterName: string, selectedOptions: string) => void;
}

const FilterCheckboxes: React.FC<FilterCheckboxesProps> = ({ searchParams, options, onChange }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      onChange(filterName, option);
    } else {
      onChange(filterName, '');
    }
  };
  console.log('searchParams', searchParams)
  return (
    <FormControl component="fieldset">
      {Object.keys(options).map((key) => (
        <Box key={key}>
          <FormLabel>
            <Typography textAlign="start" textTransform='capitalize' fontWeight={700}>
              {key}
            </Typography>
          </FormLabel>
          <FormGroup>
            {options[key].map((option) => (
              <FormControlLabel
                key={option}
                control={<Checkbox checked={searchParams !== undefined && searchParams[key] === option} onChange={(e) => handleCheckboxChange(e, key)} value={option} />}
                label={option}
              />
            ))}
          </FormGroup>
        </Box>
      ))}
    </FormControl>
  );
};

FilterCheckboxes.propTypes = {
  // filterName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterCheckboxes;
