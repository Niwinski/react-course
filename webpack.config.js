const path = require("path");
const ExtractText = require("extract-text-webpack-plugin");

module.exports = (env, args) => {
    const isProd = env === "production";
    const CSSExtract = new ExtractText("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: { sourceMap: true },
                            },
                            {
                                loader: "sass-loader",
                                options: { sourceMap: true },
                            },
                        ],
                    }),
                },
            ],
        },
        plugins: [CSSExtract],
        devtool: isProd ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            publicPath: "/dist/",
            historyApiFallback: true,
        },
    };
};
