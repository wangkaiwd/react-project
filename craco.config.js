const path = require('path');
const WebpackBar = require('webpackbar');
const { whenDev, whenProd } = require('@craco/craco');
module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    plugins: [
      new WebpackBar()
    ],
  },
};