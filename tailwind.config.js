const plugin = require('tailwindcss/plugin')

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
  theme: {},
  variants: {},
  plugins: [
    plugin(({ addComponents }) => {
      const apply = {
        '.centering': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
      addComponents(apply)
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
