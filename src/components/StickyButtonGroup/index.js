import React, { useEffect, useState, useRef, useCallback } from 'react';
import classnames from 'classnames';
import { ButtonGroup, Button } from '@material-ui/core';

import useStyles from './StickyButtonGroup.styles';

const StickyButtonGroup = ({ chartActive, onClick }) => {
  const classes = useStyles();
  const button = useRef();
  const [isFixed, setIsFixed] = useState(false);

  const setScrolled = useCallback((entries) => {
    setIsFixed(entries[0]?.boundingClientRect.y <= 0);
  }, []);

  useEffect(
    function showBasedOnScroll() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };

      const observer = new IntersectionObserver(setScrolled, options);

      if (button && button.current) {
        observer.observe(button.current);
      }

      return () => observer.unobserve(button.current);
    },
    [button, setScrolled]
  );

  return (
    <div ref={button} className={classes.wrapper}>
      <div className={classnames(classes.root, { [classes.fixed]: isFixed })}>
        <ButtonGroup
          color="secondary"
          variant="outlined"
          aria-label="Escolha o tipo de dado para visualizar no gráfico"
        >
          <Button
            className={classes.button}
            variant={chartActive === 'rt' ? 'contained' : 'outlined'}
            onClick={() => onClick('rt')}
          >
            Rt
          </Button>
          <Button
            className={classes.button}
            variant={chartActive === 'cases' ? 'contained' : 'outlined'}
            onClick={() => onClick('cases')}
          >
            Casos
          </Button>
          <Button
            className={classes.button}
            variant={chartActive === 'death' ? 'contained' : 'outlined'}
            onClick={() => onClick('death')}
          >
            Óbitos
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default StickyButtonGroup;
