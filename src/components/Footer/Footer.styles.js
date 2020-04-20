import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(6, 0),
  },
  headline: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    marginRight: 'auto',
  },
  section: {
    marginBottom: theme.spacing(5),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
