import type { Preview } from '@storybook/react-vite';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '../src/theme';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i


      }
    }
  }
};

export default preview;