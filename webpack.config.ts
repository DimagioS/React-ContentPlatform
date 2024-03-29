import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildEnv, BuildMode, BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode: BuildMode = env.mode || 'development';
  const port: number = env.port || 3000;
  const apiUrl: string = env.apiUrl || 'http://localhost:8000';

  const isDev: boolean = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    project: 'frontend',
    port,
    apiUrl,
  });

  return config;
};
