import React from 'react';
import { Button } from './button.styles';

const CustomButton = ({ label }) => {
  return (
    <>
      <Button>{label}</Button>
    </>
  );
};

export default CustomButton;
