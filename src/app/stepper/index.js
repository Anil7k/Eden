import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import { stepperStyles, QontoConnector } from './styles';
import { useState } from 'react';
import UserDetails from './stepper-pages/userDetails';
import { stepperData } from '../config';
import logo from '../../asset/resources/logo.PNG';
import QontoStepIcon from '../lib/component/stepper-label/stepperLabel';

const steps = [
  'User Details',
  'Workspace Details',
  'Usage Details',
  'Completed',
];

export default function StepperContainer() {
  const classes = stepperStyles();
  const [step, setStep] = useState(0);
  const [stepperFormData, setStepperFormData] = React.useState({
    fullName: 'Steve Jobs',
    displayName: 'Steve',
    workspace: 'Eden',
    url: 'example',
    toggleData: 'self',
  });

  const handleChange = prop => (event) => {
    setStepperFormData({ ...stepperFormData, [prop]: event.target.value });
  };
  const handleAlignmentChange = (event, value) => {
    setStepperFormData({ ...stepperFormData, ['toggleData']: value });
  };
  const updateStepper = () => {
    step < steps.length - 1 && setStep(step + 1);
  };

  return (
    <Box className={'container'}>
      <Typography component='h1' variant='h4' align='center' className={classes.header}>
        <img className={classes.logo} src={logo} alt='Logo' /> <span className={classes.headerTitle}> Eden </span>
      </Typography>
      <Stepper activeStep={step} className={classes.stepper} alternativeLabel={true} connector={<QontoConnector />}>
        {steps.map(label =>
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon} title={label}/>
          </Step>
        )}
      </Stepper>
      <UserDetails
        handleChange={handleChange}
        stepperFormData={stepperFormData}
        stepperData={stepperData[`stepper${step}`]}
        updateStepper={updateStepper}
        handleAlignmentChange={handleAlignmentChange}
        stepperCompleted={steps.length === step + 1}
      />
    </Box>
  );
}

