import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: [...Object.keys(pkg.dependencies || [])],
  output: [
    {file: pkg.main, format: 'es'}
  ],
  plugins: [typescript({tsconfig: './tsconfig.json'})]
};
