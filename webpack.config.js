const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./index.js", //Provides an entry way into the project. Can take many entries.
  output: {
    filename: "bundle.js", //Filename that is used to store the output of the webpack. Convention is to use bundle.js.
    path: __dirname + "/dist", //Provides path where the bundle.js should be stored. Only takes in the absolute path therefore use __dirname.
  },
  module: {
    rules: [
      {
        test: /\.js%/, //Regular expression which searches for js files.
        exclude: /(node_modules)/, //Excludes node modules from being searched
        use: "babel-loader", //makes the js files backward compatible.
      },
      {
        test: /\.scss$/, //Regular expression which searches for scss files.
        use: [
          // The modules are used from bottom to top
          MiniCssExtractPlugin.loader, //Used to extract the css from the javascript inside the bundle.js
          "css-loader", //Loads the css into the bundle.js produced by webpack.
          "postcss-loader", //Converts css into intermediary object so it can be changed and then converts it back to css.
          "sass-loader", //Coverts scss code into css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }), // Creates an instance of the minicssextract plugin and stores the output from css-loader into a separate file.
  ],
  watch: true, //Used to avoid reloading and watches for changed. Works as hot reload.
};
