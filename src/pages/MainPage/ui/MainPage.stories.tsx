import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { MainPage } from '..';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  storeDecorator({
    counter: {
      value: 21,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({
    counter: {
      value: 21,
    },
  }),
];
