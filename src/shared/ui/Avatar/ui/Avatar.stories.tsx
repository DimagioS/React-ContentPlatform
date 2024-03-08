import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../../assets/test/storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {
  size: 100,
  src: AvatarImg,
};

export const LightSmall = Template.bind({});
LightSmall.args = {
  size: 50,
  src: AvatarImg,
};
