const path = require('path');
const WebpackBar = require('webpackbar');
// const AutoDllPlugin = require('autodll-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalysis = process.env.REACT_APP_MODE === 'analysis', isDev = process.env.NODE_ENV === 'development',
  isProd = process.env.NODE_ENV === 'production';
// 添加任意的环境变量：https://facebook.github.io/create-react-app/docs/deployment#customizing-environment-variables-for-arbitrary-build-environments
const absPath = (dir) => path.resolve(__dirname, dir);
const generatePlugins = () => {
  const plugins = [
    new WebpackBar(),
    new HardSourceWebpackPlugin(),
    // new AutoDllPlugin({
    //   inject: true, // will inject the DLL bundle to index.html
    //   debug: true,
    //   filename: '[name]_[hash].js',
    //   path: './dll',
    //   entry: {
    //     vendor: [
    //       'react',
    //       'react-dom'
    //     ]
    //   }
    // })
  ];
  if (isAnalysis) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
};

module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    alias: {
      '@': absPath('./src')
    },
    plugins: generatePlugins()
  },
};