import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import autoStoryGenerator from '@takuma-ru/auto-story-generator';

const config: StorybookConfig = {
  'stories': ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': [],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {}
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        autoStoryGenerator.vite({
          preset: 'react',
          imports: ['src/components/**/*.tsx']
        })
      ]
    })
};
export default config;