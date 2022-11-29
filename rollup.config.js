import { defineConfig } from 'rollup';
import ttypescript from 'ttypescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import copy from 'rollup-plugin-copy';
import makePackageJson from 'rollup-plugin-generate-package-json';
import packageJson from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

const input = './src/index.ts';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = [/@babel\/runtime/, 'react', 'react-dom', 'tslib'];
const progressOption = { clearLine: false };
const nodeResolveOption = { extensions };
const babelOption = {
  extensions,
  babelHelpers: 'runtime',
  exclude: 'node_modules/**',
  plugins: ['@babel/plugin-transform-runtime'],
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
const tsOption = {
  tsconfig: 'tsconfig.json',
  typescript: ttypescript,
};
const copyOption = {
  targets: [{ src: './src/style/index.css', dest: './dist' }],
};
const makePackageJsonOption = {
  inputFolder: './',
  outputFolder: 'dist',
  baseContents: (pkg) => ({
    main: pkg.main.replace('dist/', ''),
    module: pkg.module.replace('dist/', ''),
    browser: pkg.browser.replace('dist/', ''),
    types: pkg.types.replace('dist/', ''),
    ...pkg,
  }),
};

export default defineConfig({
  external,
  input,
  output: [
    {
      dir: './dist',
      format: 'cjs',
      preserveModules: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
    },
  ],
  plugins: [
    progress(progressOption),
    makePackageJson(makePackageJsonOption),
    nodeResolve(nodeResolveOption),
    babel(babelOption),
    commonjs(),
    peerDepsExternal(),
    typescript(tsOption),
    copy(copyOption),
    isProduction && terser(),
  ],
});
