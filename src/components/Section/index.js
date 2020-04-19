import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './Section.styles';

const Section = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="body1">
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default Section;
