import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
