import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from './button-styles';

const Button = ({ children, ...rest }) =>
  <CustomButton {...rest}>
    {children}
  </CustomButton>;

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: '',
};

export default Button;
