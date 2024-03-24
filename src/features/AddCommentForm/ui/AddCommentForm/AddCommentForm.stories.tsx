import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Light = Template.bind({});
Light.args = {
  onSendComment: action('onSendComment'),
};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
  themeDecorator(Theme.DARK),
  storeDecorator({}),
];

export const Plum = Template.bind({});
Plum.args = {};

Plum.decorators = [
  themeDecorator(Theme.PLUM),
  storeDecorator({}),
];
