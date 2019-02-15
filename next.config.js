const withStylus = require('@zeit/next-stylus')
module.exports = withStylus({
  cssModules: true
})

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
