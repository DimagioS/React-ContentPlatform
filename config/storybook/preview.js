import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/decorators/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
addDecorator(routerDecorator);
