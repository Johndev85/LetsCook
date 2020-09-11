const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        entry: "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-transform-runtime",
                        ],
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png||jpeg||jpg||gif||svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 900000,
                        },
                    },
                ],
            },
            {
                test: /\.(woff||woff2||ttf||otf||eot)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "/font",
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./dist/main.css",
        }),
    ],
}
