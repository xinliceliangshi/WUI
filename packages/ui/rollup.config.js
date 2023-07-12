import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
const extensions = ['.js', '.ts', '.tsx']
const umd = {
  input: 'src/entry.ts',
  output: {
    file: 'dist/wui.umd.js',
    name: 'wui',
    format: 'umd',
    exports: 'named',
    globals: {
      vue: "Vue"
    },
  },
  extensions,
  external: ['vue'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions,
      plugins: [
        ["module-resolver",
          {
            extensions,
            "root": ["./src"],

          }
        ]
      ]
    }),
    resolve({
      extensions,
      modelesOnly: true,
      preferBuiltins: false,
    }),
    vue({
      css: true
    }),
  ],

};

export default [umd];