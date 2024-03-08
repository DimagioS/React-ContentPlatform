import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Cuontry } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile/model/types/ProfileSchema';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const data: Profile = {
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
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
  data,
};

export const Dark = Template.bind({});
Dark.args = {
  data,
};
Dark.decorators = [
  themeDecorator(Theme.DARK),
];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [
  themeDecorator(Theme.DARK),
];

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  error: 'error',
};
ErrorDark.decorators = [
  themeDecorator(Theme.DARK),
];
