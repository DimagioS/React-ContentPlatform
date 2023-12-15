import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({
  loginForm: {
    username: '123', password: 'qwe',
  },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({
    loginForm: {
      username: '123', password: 'qwe',
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};

WithError.decorators = [
  storeDecorator({
    loginForm: {
      username: '123', password: 'qwe', error: 'ERROR',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [
  storeDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];
