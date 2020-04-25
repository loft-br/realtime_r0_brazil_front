import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    backgroundColor: theme.palette.common.white,
  },
  header: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    '&.MuiAppBar-root': {
      boxShadow: 'none',
    },
  },
  link: {
    '&:not(:last-child)': {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(3),
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navigation: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  title: {
    width: 60,
    marginRight: 'auto',
  },
}));

export default useStyles;
