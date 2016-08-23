module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: [
      "spec-bundle.js"
    ],
    exclude: [
    ],
    preprocessors: {
      "spec-bundle.js": ["webpack", "sourcemap"]
    },
    webpack: {
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },
        module: {
            loaders: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        },
        devtool: "inline-source-map"
    },
    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false,
    concurrency: Infinity
  });
};
