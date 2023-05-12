import React from 'react';
import { Button } from './button.styles';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modalSlice';

const CustomButton = ({ label, onClickHandler }) => {
  return (
    <>
      <Button onClick={onClickHandler}>{label}</Button>
    </>
  );
};

export default CustomButton;
