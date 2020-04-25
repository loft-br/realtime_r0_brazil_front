import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flex: 1,
    width: '100%',
    maxWidth: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default useStyles;
