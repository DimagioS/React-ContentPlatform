import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text Text Text',
  title: 'Title Title Title',
  theme: TextTheme.PRIMARY,
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  text: 'Text Text Text',
  title: 'Title Title Title',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title Title Title',
  theme: TextTheme.PRIMARY,
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text Text Text',
  theme: TextTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  text: 'Text Text Text',
  title: 'Title Title Title',
  theme: TextTheme.PRIMARY,
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title Title Title',
  theme: TextTheme.PRIMARY,
};
onlyTitleDark.decorators = [themeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text Text Text',
  theme: TextTheme.PRIMARY,
};
onlyTextDark.decorators = [themeDecorator(Theme.DARK)];

export const PrimaryErrorDark = Template.bind({});
PrimaryErrorDark.args = {
  text: 'Text Text Text',
  title: 'Title Title Title',
  theme: TextTheme.ERROR,
};
PrimaryErrorDark.decorators = [themeDecorator(Theme.DARK)];
