import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const themeDecorator = (theme: Theme) => (Story: Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
