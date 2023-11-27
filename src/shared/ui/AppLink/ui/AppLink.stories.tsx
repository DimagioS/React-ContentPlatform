import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
  children: 'Link',
  theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [themeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Link',
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [themeDecorator(Theme.DARK)];
