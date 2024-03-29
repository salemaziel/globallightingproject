var plugins = [{
      plugin: require('/home/pc/testing-code/globallightingproject/websitefiles-copy-338pm-10.04.2019/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/pc/testing-code/globallightingproject/websitefiles-copy-338pm-10.04.2019/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/pc/testing-code/globallightingproject/websitefiles-copy-338pm-10.04.2019/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Global Lighting Project | Empowering The World","short_name":"Global Lighting Project","description":"Non-profit organization on a mission to aid developing communities with solar-powered LED lights","start_url":"/","background_color":"#fff","theme_color":"#f0af00","display":"standalone","icon":"src/images/logo.png"},
    },{
      plugin: require('/home/pc/testing-code/globallightingproject/websitefiles-copy-338pm-10.04.2019/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1380,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null]},
    },{
      plugin: require('/home/pc/testing-code/globallightingproject/websitefiles-copy-338pm-10.04.2019/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
