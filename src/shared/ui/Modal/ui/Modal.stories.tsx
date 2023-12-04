import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at facilis delectus corporis ea omnis nobis facere, aut est cupiditate ex cumque laborum qui, reprehenderit quibusdam eos porro ipsum assumenda?',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at facilis delectus corporis ea omnis nobis facere, aut est cupiditate ex cumque laborum qui, reprehenderit quibusdam eos porro ipsum assumenda?',
  isOpen: true,
};

Dark.decorators = [themeDecorator(Theme.DARK)];
