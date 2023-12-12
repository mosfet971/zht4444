const path = require('path');

module.exports = {
  entry: './src/renderer/src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/renderer/dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(?:jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react'],
            ],
            plugins: ["babel-plugin-styled-components"],
          },
        },
      },
    ],
  },
};
