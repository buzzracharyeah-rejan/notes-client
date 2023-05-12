import React from 'react';
import { Button } from './button.styles';

const CustomButton = ({ label, onClickHandler }) => {
  return (
    <>
      <Button onClick={onClickHandler}>{label}</Button>
    </>
  );
};

export default CustomButton;
