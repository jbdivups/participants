import type { Preview } from '@storybook/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        {Story()}
      </ChakraProvider>
    ),
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light'
    })
  ],
  parameters: {
    docs: {
      codePanel: true  // Key: Enable the Code panel here
    }
    // Other parameters...
  }
};

export default preview;