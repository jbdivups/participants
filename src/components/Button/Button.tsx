import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, colorPalette, variant, disabled, loading }) => (
  <ChakraButton disabled={disabled} colorPalette={colorPalette} variant={variant} loading={loading}>
    {label}
  </ChakraButton>
);