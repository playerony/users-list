const {alias, configPaths} = require('react-app-rewire-alias')

module.exports = function override(config) {
  const modifiedConfig = {
    ...config,
    resolve: {
      ...config.extensions,
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
  }

  return alias(configPaths('./tsconfig.paths.json'))(modifiedConfig)
}
