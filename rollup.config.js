import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import makePackageJson from 'rollup-plugin-generate-package-json';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import packageJson from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs'];

export default defineConfig([
  {
    external: [/@babel\/runtime/, 'react', 'react-dom'],
    input: 'src/index.ts',
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
      // {
      //   name: packageJson.name,
      //   file: packageJson.browser,
      //   format: 'umd',
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //     styleInject: 'styleInject',
      //   },
      // },
    ],
    plugins: [
      filesize({
        reporter: [function (options, outputOptions, info) {}],
      }),
      progress({ clearLine: false }),
      nodeResolve({ extensions }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
        plugins: ['@babel/plugin-transform-runtime'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          '@babel/preset-react',
        ],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      peerDepsExternal(),
      typescript(),
      copy({
        targets: [{ src: './src/style/index.css', dest: './dist' }],
      }),
      makePackageJson({
        inputFolder: './',
        outputFolder: 'dist',
        baseContents: (pkg) => ({
          name: pkg.name,
          version: pkg.version,
          repository: pkg.repository,
          engines: pkg.engines,
          main: pkg.main.replace('dist/', ''),
          module: pkg.module.replace('dist/', ''),
          browser: pkg.browser.replace('dist/', ''),
          types: pkg.types.replace('dist/', ''),
          style: pkg.style.replace('dist/', ''),
          peerDependencies: pkg.peerDependencies,
        }),
      }),
      terser(),
    ],
  },
]);
