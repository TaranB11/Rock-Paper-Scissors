import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const gameMode = [
  {
    value: 'Player vs Computer',
  },
  {
    value: 'Computer vs Computer',
  },
];

export default function EntryScreen() {

  return (
    <Box
      component="span"
      sx={{
         'text-align': 'center', 'display':'flex', 'justifyContent': 'center', 'alignItems':'center',
        'height':'400px'
      }}
    >
      <div>
      <div>
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
      <TextField
          id="outlined-select-currency"
          select
          defaultValue="Player vs Computer"
          helperText="Please select your Game Mode"
        >
          {gameMode.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button variant="contained">Play</Button>
      </div>
    </Box>
  );
}