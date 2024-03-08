import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.tsx', '.ts');

  // This customizes the rules to exclude default SVG processing by existing rules, and adds a new rule to use '@svgr/webpack', which allows importing SVGs as React components.
  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
