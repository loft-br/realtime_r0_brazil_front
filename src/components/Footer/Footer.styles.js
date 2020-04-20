import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(6, 0),
  },
  logo: {
    width: 50,
  },
  section: {
    marginBottom: theme.spacing(5),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
