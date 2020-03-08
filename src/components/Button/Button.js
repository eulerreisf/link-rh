import React from 'react';

// Styled Component
import { ButtonComponent } from './styles';

const Button = ({ name, disabled, onClick }) =>
  <ButtonComponent disabled={disabled} onClick={onClick}>
    {name}
  </ButtonComponent>;




Button.defaultProps = {
  name: 'Button',
  disabled: false,
};


export default Button;