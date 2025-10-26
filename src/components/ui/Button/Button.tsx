import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
  colorPalette?: 'red' | 'blue' | 'green';
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ label, colorPalette, variant }) => (
  <ChakraButton colorPalette={colorPalette} variant={variant}>
    {label}
  </ChakraButton>
);