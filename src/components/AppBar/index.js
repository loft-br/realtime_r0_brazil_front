import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './AppBar.styles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar color="transparent" position="static" component="header">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Loft
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
