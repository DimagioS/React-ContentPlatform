import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  height: 100,
  width: 100,
  border: '50%',
};

export const DarkCircle = Template.bind({});
DarkCircle.args = {
  height: 100,
  width: 100,
  border: '50%',
};
DarkCircle.decorators = [themeDecorator(Theme.DARK)];

export const Rectangle = Template.bind({});
Rectangle.args = {
  height: 200,
  width: '100%',
};

export const PlumRectangle = Template.bind({});
PlumRectangle.args = {
  height: 200,
  width: '100%',
};
PlumRectangle.decorators = [themeDecorator(Theme.PLUM)];
