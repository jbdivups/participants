import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs'
  ],
  framework: '@storybook/react-vite',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => prop.parent ? !/node_modules\/(?!@chakra-ui)/.test(prop.parent.fileName) : true
    }
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  }

};

export default config;