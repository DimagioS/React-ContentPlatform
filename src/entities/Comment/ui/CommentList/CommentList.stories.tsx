import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
  {
    id: '1',
    text: '123',
    user: {
      id: '1',
      username: 'Vasya',
      avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  },
  {
    id: '2',
    text: 'qwer',
    user: {
      id: '1',
      username: 'Vasya',
      avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
  },
];

export const Light = Template.bind({});
Light.args = {
  isLoading: false,
  comments,
};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  isLoading: false,
  comments,
};

Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({}),
];

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
