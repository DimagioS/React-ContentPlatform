import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const UserAuth = Template.bind({});
UserAuth.args = {};
UserAuth.decorators = [themeDecorator(Theme.DARK), storeDecorator({
  user: {
    authData: {
      id: 1,
      username: 'admin',
    },
  },
})];
