import React from 'react';

// Styles Componets
import { InputComponent, InputLabel, ErrorMessage, InputContainer } from './styles';

const Input = ({ label, maxLength, minLengtb, error, value, register, name, type }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent ref={register} name={name} type={type} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
};

Input.defaultProps = {
  label: 'Label',
  error: null,
  type: 'text'
};
export default Input;