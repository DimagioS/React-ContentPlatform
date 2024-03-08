import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { ProfilePageHeader } from './ProfilePageHeader';

export default {
  title: 'pages/ProfilePageHeader',
  component: ProfilePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePageHeader>;

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => <ProfilePageHeader {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true,
};
ReadOnly.decorators = [storeDecorator({})];

export const ReadOnlyDark = Template.bind({});
ReadOnlyDark.args = {
  readonly: true,
};
ReadOnlyDark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
