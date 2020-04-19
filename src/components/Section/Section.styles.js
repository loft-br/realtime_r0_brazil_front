import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },

  title: {
    marginBottom: theme.spacing(3),
  },

  description: {
    marginBottom: theme.spacing(5),
  },
}));

export default useStyles;
