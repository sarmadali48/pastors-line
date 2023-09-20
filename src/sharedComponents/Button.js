import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  background: ${props => props.background || '#46139f'};
  color: ${props => props.color || '#fff'};
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 5px;
  font-weight: bold;
`;

const Button = (props) => {
  const { label } = props;
  return <CustomButton {...props}>{label}</CustomButton>;
}

export default Button;