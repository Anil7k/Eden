import React from 'react';
import { FormControl, FormHelperText, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { tabStyles, myTheme } from './styles';
import Button from '../../lib/component/button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PropTypes from 'prop-types';

const UserDetails = ({ stepperFormData, handleChange, stepperData, updateStepper, handleAlignmentChange, stepperCompleted }) => {
  const classes = tabStyles();
  const { title, subTitle, buttonText, selectorDetails, toggleDetails } = stepperData;
  const getValue = value => stepperFormData[value];

  return <div className={classes.contentStyle}>
    <div>
      <Typography variant='h5' className={classes.text}>
        {title} {stepperCompleted ? `${stepperFormData.displayName}!` : null}
      </Typography>
      <Typography variant='h6' className={classes.subText} >
        {subTitle} {stepperCompleted ? `${stepperFormData.workspace}!` : null}
      </Typography>
    </div>
    <div className={classes.form}>
      <Grid container={true} spacing={1}>
        { selectorDetails ? selectorDetails.map((list, index) =>
          <Grid item={true} xs={12} sm={12} md={12} key={index}>
            <FormControl variant='outlined' fullWidth={true}>
              <FormHelperText id='outlined-weight-helper-text'
                className={classes.textFieldHeading}
              >{list.label} {list.optional ? <span className={classes.optional}>
                  [optional] </span> : null}</FormHelperText>
              <TextField
                startAdornment={list.url ? <InputAdornment id={'url'} >www.eden.com/</InputAdornment> : ''}
                classes={{
                  root: [classes.outlinedInput, list.url ? classes.urlInput : null].join(' '),
                  focused: classes.focused,
                  notchedOutline: classes.notchedOutline,
                }}
                title={list.label}
                id='outlined-adornment'
                value={getValue(list.value)}
                onChange={handleChange(list.value)}
                placeholder={list.placeholder}
                fullWidth={true}
              />
            </FormControl>
          </Grid>) : null}
        { toggleDetails ? <ThemeProvider theme={myTheme}>
          <ToggleButtonGroup
            color='primary'
            value={stepperFormData.toggleData}
            exclusive
            onChange={handleAlignmentChange}
          >
            {toggleDetails.map((toggle, index) =>
              <ToggleButton className={classes.toggleButton} value={toggle.value} key={index}>
                { toggle.value === 'self' ? <PersonIcon /> : <GroupIcon /> }
                <br/>
                <span className={classes.toggleText}> {toggle.text} </span>
                <br />
                <span className={classes.subText} > {toggle.subText} </span>
              </ToggleButton>
            )}

          </ToggleButtonGroup> </ThemeProvider> : null}

      </Grid>
      <Button
        onClick={updateStepper}
      >{buttonText}</Button>

    </div>

  </div>;
};
UserDetails.propTypes = {
  stepperFormData: PropTypes.object,
  handleChange: PropTypes.func,
  stepperData: PropTypes.object,
  updateStepper: PropTypes.func,
  handleAlignmentChange: PropTypes.func,
  stepperCompleted: PropTypes.bool,
};
export default UserDetails;
