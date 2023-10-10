import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // this loader can process jsx, otherwise babel would be needed
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }

    return [
        typescriptLoader,
        cssLoader,
    ]
}
