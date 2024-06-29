import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json' }),
  postcss({
    extensions: ['.css'],
    extract: true, // Ensure CSS is extracted to a separate file
    minimize: true, // Minimize CSS output
    modules: true, // Enable CSS modules if needed
    // Other postcss options as needed
  }),
  terser(),
];

const outputConfigs = [
  {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: false,
  },
];

export default [
  {
    input: 'src/index.ts',
    output: outputConfigs,
    plugins: plugins,
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [], // No plugins needed for declaration file
  },
];
