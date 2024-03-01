import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CuontrySelect } from './CountrySelect';

export default {
  title: 'entities/CuontrySelect',
  component: CuontrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CuontrySelect>;

const Template: ComponentStory<typeof CuontrySelect> = (args) => <CuontrySelect {...args} />;

export const Light = Template.bind({});
Light.args = {};
