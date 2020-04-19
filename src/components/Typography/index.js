import React from 'react';
import { Typography as MuiTypography } from '@material-ui/core';
import classnames from 'classnames';
import useStyles from './Typography.styles';

const Typography = (props) => {
  const classes = useStyles();
  const { className, children, ...other } = props;

  return (
    <MuiTypography className={classnames(classes.root, className)} {...other}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
