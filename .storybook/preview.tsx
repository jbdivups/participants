import type { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../src/theme';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        {Story()}
      </ChakraProvider>
    )
  ]
};

export default preview;