import React from 'react';
import Typography from '../Typography';
import useStyles from './Section.styles';

const Section = ({ children, description, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.description} variant="subtitle1">
        {description}
      </Typography>
      {children}
    </div>
  );
};

export default Section;
