import { makeStyles } from '@material-ui/core/styles';

const fontWeight = 700;

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiTypography-h1': { fontWeight },
    '&.MuiTypography-h2': { fontWeight },
    '&.MuiTypography-h3': { fontWeight },
    '&.MuiTypography-h4': { fontWeight },
    // '&.MuiTypography-h5': { fontWeight },
    // '&.MuiTypography-h6': { fontWeight },
  },
}));

export default useStyles;
