// Used Url below to set up the optimizedImages plugin 
// https://maxrohde.com/2021/07/25/next-js-11-images-with-static-export
// ... to get around error below
// Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
// 
const optimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

module.exports = (
  withMDX({
    compress: false,
    // webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.node = {
    //     fs: 'empty'
    //   }
    // }
    // return config
    // },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    // images: { loader: 'akamai' },
    images: { unoptimized: true },
    // images: {
    //   disableStaticImages: true,
    // },
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