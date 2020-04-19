import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './AppBar.styles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar
        className={classes.header}
        color="transparent"
        position="static"
        component="header"
      >
        <Container maxWidth="xlg">
          <Toolbar>
            <svg
              className={classes.title}
              focusable="false"
              viewBox="0 0 140 119"
              color="#FF774A"
              aria-hidden="false"
              role="img"
            >
              <g fill-rule="evenodd">
                <polygon points="139.879 44.876 131.05 44.876 131.05 28.52 118.437 28.52 118.437 98.567 131.05 98.567 131.05 57.384 139.879 57.384"></polygon>
                <path d="M90.6315856,119.840822 L78.018973,119.840822 L78.018973,27.6728524 C78.018973,12.9617512 90.087982,0.991235202 104.922937,0.991235202 L104.922937,13.4996113 C97.0425766,13.4996113 90.6315856,19.8576189 90.6315856,27.6728524 L90.6315856,119.840822 Z"></path>
                <path d="M71.6580365,44.8761224 L112.073027,44.8761224 L108.497351,57.3844985 L71.6580365,57.3844985 C68.8358742,68.510984 58.6626658,76.7724816 46.5798919,76.7724816 C32.3225946,76.7724816 20.724036,65.2697789 20.724036,51.1303105 C20.724036,36.9908421 32.3225946,25.4881394 46.5798919,25.4881394 C58.6626658,25.4881394 68.8358742,33.749637 71.6580365,44.8761224 Z M32.0753874,51.1303105 C32.0753874,59.0618718 38.5822342,65.514943 46.5798919,65.514943 C54.5775495,65.514943 61.0843964,59.0618718 61.0843964,51.1303105 C61.0843964,43.1987492 54.5775495,36.7456779 46.5798919,36.7456779 C38.5822342,36.7456779 32.0753874,43.1987492 32.0753874,51.1303105 Z"></path>
                <path d="M34.9076757,97.7300156 C15.6595676,97.7300156 -0.000252252253,82.1996158 -0.000252252253,63.1093321 L-0.000252252253,28.5199196 L12.6123604,28.5199196 L12.6123604,63.1093321 C12.6123604,75.3012464 22.6141622,85.2216395 34.9076757,85.2216395 L34.9076757,97.7300156 Z"></path>
              </g>
              <title>Loft</title>
            </svg>
            <Button color="inherit">About</Button>
            <Button color="inherit">Medium 1</Button>
            <Button color="inherit">Medium 2</Button>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
