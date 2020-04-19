import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" component="header">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Loft
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
