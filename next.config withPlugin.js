// Used Url below to set up the optimizedImages plugin 
// https://maxrohde.com/2021/07/25/next-js-11-images-with-static-export
// ... to get around error below
// Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
// but I still get the error when I run build-export. I had had to upgrade next from v11 to v12
// See current next.config.js

const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

module.exports = withPlugins([
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
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    images: { disableStaticImages: true },
    // path: "",
    images: {
      disableStaticImages: true,
    },
  }),
  [optimizedImages, {
    optimizeImages: false,
  }],
]
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