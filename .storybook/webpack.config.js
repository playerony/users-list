const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@parts': path.resolve(__dirname, '..', 'src', 'parts'),
    '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
    '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
    '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
    '@router': path.resolve(__dirname, '..', 'src', 'router'),
    '@layout': path.resolve(__dirname, '..', 'src', 'layout'),
    '@context': path.resolve(__dirname, '..', 'src', 'context'),
    '@mocks': path.resolve(__dirname, '..', 'src', '__mocks__'),
    '@constants': path.resolve(__dirname, '..', 'src', 'constants'),
    '@hooks': path.resolve(__dirname, '..', 'src', 'utils', 'hooks'),
    '@interfaces': path.resolve(__dirname, '..', 'src', 'interfaces'),
    '@functions': path.resolve(__dirname, '..', 'src', 'utils', 'functions'),
  };

  return config;
};
