import React from 'react';
import Select from 'react-select';

//Styled components
import { SelectContainer, SelectLabel, ErrorMessage } from './styles';

const SelectComponet = ({
  name,
  label,
  options,
  defaultValue,
  isDisabled,
  isLoading,
  isClearable,
  isRtl,
  className,
  isSearchable,
  error
}) =>
  <SelectContainer>
    {label && <SelectLabel>{label}</SelectLabel>}
    <Select
      className={className}
      classNamePrefix="select"
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name={name}
      options={options}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </SelectContainer>;



export default SelectComponet;