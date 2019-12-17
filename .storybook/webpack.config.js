const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.doc.json")
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
