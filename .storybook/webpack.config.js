const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@parts': path.resolve(__dirname, '..', 'src', 'parts'),
    '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
    '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
    '@router': path.resolve(__dirname, '..', 'src', 'router'),
    '@context': path.resolve(__dirname, '..', 'src', 'context'),
    '@constants': path.resolve(__dirname, '..', 'src', 'constants'),
  };

  return config;
};
