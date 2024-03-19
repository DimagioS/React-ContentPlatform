import { ComponentStory, ComponentMeta } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const code = '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;s';

export const Light = Template.bind({});
Light.args = {
  code,
};

export const Dark = Template.bind({});
Dark.args = {
  code,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Plum = Template.bind({});
Plum.args = {
  code,
};
Plum.decorators = [themeDecorator(Theme.PLUM)];
