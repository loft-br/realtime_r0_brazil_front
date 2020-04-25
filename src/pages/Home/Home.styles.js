import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: 80,
  },
  barChartWrapper: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    height: 500,
    overflowX: 'auto',
    overflowY: 'hidden',
  },
}));

export default useStyles;
