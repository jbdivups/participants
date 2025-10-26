import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs'
  ],
  framework: '@storybook/react-vite',
  refs: {
    '@chakra-ui/react': { disable: true }
  }

};

export default config;