import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(6, 0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
  },
}));

export default useStyles;
