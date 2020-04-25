import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingWrapper: {
    width: '100%',
    minHeight: 300,
    zIndex: 999,
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
