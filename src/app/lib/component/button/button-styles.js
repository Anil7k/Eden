import { Button } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

export const CustomButton = withStyles({
  root: {
    width: '100% !important',
    height: '32px',
    margin: '26px 0px 0px 0px',
    lineHeight: '28px',
    maxHeight: '32px',
    padding: '0 20px 0 20px',
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    color: '#fff',
    backgroundColor: '#654de2',
    border: 'none',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#654de2',
    },
  },
})(Button);

