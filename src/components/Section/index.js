import React from 'react';
import Typography from 'components/Typography';
import useStyles from './Section.styles';

const Section = ({ children = null, description, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {title && (
        <Typography
          className={classes.title}
          variant="h4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {description && (
        <Typography
          className={classes.description}
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {children}
    </div>
  );
};

export default Section;
