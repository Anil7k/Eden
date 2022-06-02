import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/styles';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';

export const QontoConnector = styled(StepConnector)(( ) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    left: 'calc(-50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#b6b2b2',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
export const stepperStyles = makeStyles(() => ({
  header: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 22,
    fontWeight: 700,
    margin: 21,
  },
  logo: {
    width: 36,
    height: 40,
  },
  headerTitle: {
    top: -9,
    position: 'relative',
  },
  stepper: {
    padding: '38px 0px 65px 0px',
  },

}));
