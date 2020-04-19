import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },

  title: {
    marginBottom: theme.spacing(5),
  },
}));

export default useStyles;
