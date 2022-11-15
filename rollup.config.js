import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import makePackageJson from 'rollup-plugin-generate-package-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs'];

export default defineConfig([
  {
    external: [/node_modules/, /@babel\/runtime/, 'react', 'react-dom'],
    input: 'src/index.ts',
    output: [
      {
        dir: './dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
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
          module: pkg.module.replace('dist/', ''),
          types: pkg.types.replace('dist/', ''),
          style: pkg.style.replace('dist/', ''),
          peerDependencies: pkg.peerDependencies,
        }),
      }),
    ],
  },
]);
