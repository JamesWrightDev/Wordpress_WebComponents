const path = require('path');

module.exports = {
  watch: true,
  entry: './resources/assets/scripts/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./dist', 'scripts'),
  },
};