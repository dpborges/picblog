// const withNextOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

module.exports = (
  withMDX({
    compress: false,
    webpack5: false,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
        fs: 'empty'
      }
    }
    return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  })
)



// module.exports = {
//   // withMDX({
//   //   pageExtensions: ['js', 'jsx', 'md', 'mdx']
//   // }),
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     withMDX({
//       pageExtensions: ['js', 'jsx', 'md', 'mdx']
//     })


//     return config
//   }
  

// }