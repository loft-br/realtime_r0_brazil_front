import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingWrapper: {
    width: '100vw',
    height: '110vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 999,
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 80,
  },
}));

export default useStyles;
