import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    width: '100vw',
    minHeight: 116,
  },
  root: {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    top: 0,
    left: 0,
    position: 'relative',
    zIndex: 999,
    padding: theme.spacing(5, 0),
  },

  fixed: {
    position: 'fixed',
    transition: 'all 0.32s ease-in-out',
  },

  button: {
    backgroundColor: '#f3f7fa',
  },
}));

export default useStyles;
