import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, children, ...props }) => (
  <ChakraButton {...props}>
    {label || children}
  </ChakraButton>
);