import React from 'react';
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  label?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  colorPalette?: 'red' | 'blue' | 'green' | 'yellow';
}

export const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  function Button(props) {
    const { label, colorPalette, variant, disabled, loading } = props;
    return (
      <ChakraButton disabled={disabled} colorPalette={colorPalette} variant={variant} loading={loading}>
        {label}
      </ChakraButton>
    );
  }
);

