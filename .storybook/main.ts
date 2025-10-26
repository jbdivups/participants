import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  'stories': ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': [],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {}
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  }

};
export default config;

