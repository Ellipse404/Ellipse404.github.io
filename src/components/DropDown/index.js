import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownComponent({ childToParent , ...props}) {
  const [params, setParams] = React.useState('');

  const handleChange = (event) => {
    setParams(event.target.value);
    childToParent(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120, minHeight: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.inputLab}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={params}
          label={ props.inputLab || "Age"}
          onChange={handleChange}
        >
          <MenuItem value={1}>{props.first}</MenuItem>
          <MenuItem value={2}>{props.second}</MenuItem>
          <MenuItem value={3}>{props.third}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
