import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
  colorPalette?: 'red' | 'blue' | 'green';
}

export const Button: React.FC<ButtonProps> = ({ label, colorPalette }) => (
  <ChakraButton colorPalette={colorPalette}>
    {label}
  </ChakraButton>
);