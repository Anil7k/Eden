import makeStyles from '@mui/styles/makeStyles';
import { createTheme } from '@mui/material/styles';

export const tabStyles = makeStyles(() => ({
  contentStyle: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
  },
  subText: {
    fontSize: 12,
    color: '#8f959f',
    textAlign: 'center',
    fontWeight: 500,
    marginTop: 5,
  },
  toggleText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 600,
    color: '#000',
  },
  toggleButton: {
    display: 'block',
    marginLeft: 10,
    textAlign: 'left',
  },
  form: {
    textAlign: 'left',
    marginTop: 10,
    width: '85%',
    padding: 35,
  },
  textFieldHeading: {
    marginLeft: '0 !important',
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
  },
  optional: {
    color: '#a59e9e',
  },
  outlinedInput: {
    width: '100%',
    '&$focused $notchedOutline, &:hover $notchedOutline': {
      borderColor: '#654de2',
    },
  },
  urlInput: {
    fontFamily: 'Inter, sans-serif',
    width: '100%',
    background: '#efefef',
    '&$focused $notchedOutline, &:hover $notchedOutline': {
      borderColor: '#654de2',
    },
  },
  focused: {},
  notchedOutline: {},
}));

export const myTheme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          margin: '5px 45px 0 0',
          borderLeft: '1px solid rgba(0, 0, 0, 0.12) !important',
          borderRadius: 5,
          lineHeight: '1.35',
          padding: 0,
          paddingTop: 10,
          paddingLeft: 10,
          paddingBottom: 10,
          color: '#000',
          width: 163,
          '&.Mui-selected': {
            border: '1px solid #654de2',
            borderLeft: '1px solid #654de2 !important',
            background: 'transparent',
            color: '#654de2',
          },
        },
      },
    },
  },
});
