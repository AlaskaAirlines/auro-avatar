// export default {
//   globs: ['**/*.js'],
//   exclude: ['**/*-css.js', '**/*__bundled.js', '**/*__bundled.es5.js'],
//   outdir: 'react',
//   litelement: true,
// };


import reactify from 'cem-plugin-reactify';

export default {
  globs: ['./dist/**/*.js'],
  exclude: ['**/*-css.js', '**/es5.js', '**/*__bundled.js', '**/*__bundled.es5.js'],
  litelement: true,

  plugins: [
    reactify({
      /** Directory to write the React wrappers to, defaults to `legacy` */
      outdir: 'react',

      /** Provide an attribute mapping to avoid using JS/React reserved keywords */
      // attributeMapping: {
      //   'for': '_for'
      // },

      /** Array of classNames to exclude */
      // exclude: ['**/*-css.js', '**/es5.js', '**/*__bundled.js', '**/*__bundled.es5.js'],
    })
  ]
}
