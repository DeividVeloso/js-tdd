// Lib utilizada para resolver os caminhos dos arquivos para
// pegar da pasta certa e jogar para pasta certa
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // é para apontar qual é a pasta com todos os meus arquivos.
  // dirname é o arquivo que eu estou
  context: path.resolve(__dirname, './src'),
  // é o arquivo principal que vai exportar todos os outros
  entry: {
    app: './main.js',
  },
  // Onde vou jogar o arquivo bundlelizado
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './example'),
  },
  // Ele vai levantar o servidor
  devServer: {
    // onde ele vai ler os arquivos para rodar no servidor
    contentBase: path.resolve(__dirname, './example'),
  },
  // Regras do webpack, uglify, minify e etc.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader', // Use o babel loader para transpilar o código para es5
          },
        ],
      },
    ],
  },
};
