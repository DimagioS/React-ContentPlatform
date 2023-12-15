import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

ClearDark.decorators = [themeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED,
};

ClearInvertedDark.decorators = [themeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGOUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGOUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '<',
  theme: ButtonTheme.BACKGOUND_INVERTED,
  square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '<',
  theme: ButtonTheme.BACKGOUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<',
  theme: ButtonTheme.BACKGOUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<',
  theme: ButtonTheme.BACKGOUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};

export const disabled = Template.bind({});
disabled.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
