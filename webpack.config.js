const path = require('path'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
Autoprefixer = require('autoprefixer'),
PostcssCustomProperties = require('postcss-custom-properties'),
JavaScriptObfuscator = require('webpack-obfuscator'),
CopyPlugin = require('copy-webpack-plugin'),
CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
TerserPlugin = require('terser-webpack-plugin'),
{ CleanWebpackPlugin } = require('clean-webpack-plugin');

const ofuscar = false;

module.exports = {
  entry: {
    main: [
      './modules/index.ts',
      './src/sass/main.scss'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['./modules', 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:  [ 'ts-loader'], // aca quede "sass-loader"   "style-loader", "css-loader"
        exclude: /node_modules/,
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader",
        ],
      },
      {
        test: /\.png/ || /\.jpg/,
        type: "asset/resource"
      },
      {
        //test: /\.(woff|woff2)$/, // REGLA PARA ARCHIVOS WOFF | WOFF2
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: false, 
            mimetype: 'aplication/font-woff',
            name: "[name].[ext]",
            outputPath: './fonts/',
            publicPath: './fonts/',
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new CopyPlugin({ // CONFIGURACIÓN DEL COPY PLUGIN
      patterns: [
        {
          from: path.resolve(__dirname, "src", 'assets/images'), // CARPETA A MOVER AL DIST
          to: "assets/images" // RUTA FINAL DEL DIST
        }
      ]
    }),
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./dist/*.html', './dist/*.css', './dist/*.js'],
      server: { baseDir: ['dist'] }
    }),
    new JavaScriptObfuscator ({
      rotateUnicodeArray: ofuscar
    })
  ],
  
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
}