import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { Profile } from 'entities/Profile';
import ProfilePage from './ProfilePage';

const form: Profile = {
  first: 'qwerty',
  lastname: 'qwerty',
  age: 10,
  city: 'Moscow',
  country: Cuontry.Russia,
  currency: Currency.RUB,
  username: 'qwerty',
  avatar: AvatarImg,
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({
  profile: {
    form,
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
  profile: {
    form,
  },
})];

export const NotReadOnly = Template.bind({});
NotReadOnly.args = {};
NotReadOnly.decorators = [storeDecorator({
  profile: {
    form,
    readonly: true,
  },
})];

export const NotReadOnlyDark = Template.bind({});
NotReadOnlyDark.args = {};
NotReadOnlyDark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
  profile: {
    form,
    readonly: true,
  },
})];
