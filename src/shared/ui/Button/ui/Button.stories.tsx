import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR,
};

ClearDark.decorators = [themeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [themeDecorator(Theme.DARK)];
