import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff774a',
    },
    secondary: {
      main: '#20A483',
    },
    error: {
      main: '#E17272',
    },
    background: {
      default: '#F3F7FA',
    },
    text: {
      primary: '#191F23',
    },
  },
});

export default theme;
