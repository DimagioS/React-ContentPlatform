import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment = {
  id: '1',
  text: '123',
  user: {
    id: '1',
    username: 'Vasya',
    avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
  },
};

export const Light = Template.bind({});
Light.args = {
  comment,
};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  comment,
};

Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({}),
];

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
