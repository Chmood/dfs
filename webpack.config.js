////////////////////////////////////////////////////////////////////////////////
//
// WEBPACK.CONFIG.JS
// The building blackbox!
//
////////////////////////////////////////////////////////////////////////////////

/*
TODO:
    - hash in filenames (production cachebusting)
    - multiple bundles (ex: "vendor")
    - imagemin / decompress throws 12 severe security warnings (see: https://github.com/kevva/decompress/pull/73)
 */

const
    // Resolves paths
    path = require('path'),

    // Cleans /dist folder before build
    { CleanWebpackPlugin } = require("clean-webpack-plugin"),

    // Copy static files from src to dist
    CopyWebpackPlugin = require("copy-webpack-plugin"),

    // Optimize images
    ImageminPlugin = require("imagemin-webpack-plugin").default,

    // Generates SVG sprites
    SVGSpriteLoaderPlugin = require("svg-sprite-loader/plugin"),

    // Optimize SVG (for sprites)
    // SVGOLoaderPlugin = require("svgo-loader"),

    // Extract CSS compiled stylesheet into files
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),

    // Favicon generator plugin
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),

    // Browser synced between multiple devices
    BrowserSyncPlugin = require("browser-sync-webpack-plugin")


////////////////////////////////////////////////////////////////////////////////
// CONFIGURATION

const
    dirSrc = "src/", // Where source dev files live
    dirDist = "dist/", // Where compiled assets go

    // Where to extract SVG spritesheet (path is relative to dirDist)
    SVGSpriteFilename = "img/sprite.symbol.svg.twig",

    // Development or production build?
    ENV = process.env.NODE_ENV || "production"

////////////////////////////////////////////////////////////////////////////////
// WEBPACK CONFIGURATION

module.exports = {

    // Environnement ("development" or "production")
    // See https://webpack.js.org/configuration/mode/
    // Please remember that setting NODE_ENV doesn't automatically set mode.

    mode: ENV, // Defaults to "production"

    // This option controls if and how source maps are generated.
    // See: https://webpack.js.org/configuration/devtool/

    devtool: ENV === 'development' ? 'inline-source-map' : 'none',

    ////////////////////////////////////////
    // INPUT
    // See: https://webpack.js.org/configuration/entry-context/

    // CONTEXT
    // The base directory, an absolute path, for resolving entry points and loaders from configuration.
    // By default the current directory is used, but it's recommended to pass a value in your configuration. This makes your configuration independent from CWD (current working directory).

    context: path.resolve(__dirname, dirSrc), // Defaults to "src/"

    // ENTRY
    // The point or points where to start the application bundling process. If an array is passed then all items will be processed.
    // Simple rule: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.
    // Naming: 
    //   - If a string or array of strings is passed, the chunk is named "main".
    //   - If an object is passed, each key is the name of a chunk, and the value describes the entry point for the chunk.

    // entry: "./js/main.js",
    // entry: ["./js/main.js", "./scss/main.scss"],
    // entry: {
    //   main: './js/main.js',
    //   home: { import: './js/home.js', filename: 'pages/[name][ext]' },
    // },

    entry: {
        main: './js/main.js',
    },

    ////////////////////////////////////////
    // OUTPUT

    output: {
        // The base directory, an absolute path, for resolving output assets.
        path: path.resolve(__dirname, dirDist), // Defaults to "dist/"

        // The output files path and name pattern
        // filename: "js/[name].[hash:8].js"
        filename: "js/[name].js",

        // DEV SERVER assets root folder
        publicPath: dirDist, // Defaults to "dist/"
    },

    ////////////////////////////////////////
    // MODULES (AND LOADERS)

    module: {
        rules: [

            ////////////////////////////////////////
            // JAVASCRIPT
            {
                test: /\.js$/,
                // include: /src/,
                exclude: /(node_modules)/,
                use: [
                    {
                        // See package.json for babel options
                        loader: "babel-loader",
                    },
                    {
                        // See package.json for eslint options
                        loader: "eslint-loader",
                    }
                ]
            },

            ////////////////////////////////////////
            // CSS
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    // /!\ Loader are in reverse orders (last declared is executed first)

                    // CSS extraction 
                    {
                        loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                        options: {
                            // publicPath: "/dist/css/",
                        }
                    },

                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        }
                    },

                    // POST-CSS processing (prod only)
                    // Use it after css-loader and style-loader / MiniCssExtract, but before other preprocessor loaders like e.g sass|less|stylus-loader, if you use any.
                    {
                        loader: "postcss-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                            // See package.json for autoprefixer, cssnano and browserlist options
                        },
                    },

                    // SASS Compilation
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },

            ////////////////////////////////////////
            // SVG SPRITES
            {
                test: /img(\/|\\)sprites(\/|\\).*\.svg$/,
                use: [
                    {
                        loader: "svg-sprite-loader",
                        options: {
                            extract: true, // Extract into file
                            spriteFilename: SVGSpriteFilename,
                            // publicPath: path.resolve(__dirname, dirDist),
                            // runtimeCompat: true, // Should runtime be compatible with earlier v0.x loader versions. This option will be removed in the next major version release.
                        }
                    },
                    {
                        loader: "svgo-loader",
                        options: {
                            plugins: [
                                {removeTitle: true},
                                {convertColors: {shorthex: false}},
                                {convertPathData: false}
                            ]
                        }
                    }
                ]
            },
        ]
    }, // End module

    ////////////////////////////////////////
    // PLUGINS

    plugins: [

        // Clean dist folder
        new CleanWebpackPlugin(), // Zero config, cleans content of the 'output.path' by default ('/dist' folder)

        // Copy static files
        new CopyWebpackPlugin(
            [
                // { from: "img/video/*.*", to: path.resolve(__dirname, dirDist) },
                // { from: "img/favicon/*.*", to: path.resolve(__dirname, dirDist) },
                { from: "img/*.*", to: path.resolve(__dirname, dirDist) },
                { from: "fonts/*.*", to: path.resolve(__dirname, dirDist) },
            ],
            {
                // Copy files in watch mode too (otherwise they will miss from subsequent builds)
                // Another solution to this is tweaking the clean plugin (see 'cleanStaleWebpackAssets' option)
                copyUnmodified: true,
                // debug: 'info'
            }
        ),

        // Optimize images
        // Make sure that the plugin is after any plugins that add images (like "copy-webpack-plugin")

        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            // disable: ENV !== 'production', // Disable during development
        }),

        // Generates SVG sprites
        new SVGSpriteLoaderPlugin({
            plainSprite: true
        }),

        // Generate CSS stylesheet file (aka extraction)
        new MiniCssExtractPlugin({
            // Options similar to those in webpackOptions.output
            path: path.resolve(__dirname, `${dirDist}css/`), // Defaults to "dist/css/"
            filename: "css/[name].css",
            // chunkFilename: '[id].css',
        }),

        // Generate favicons
        // See: https://github.com/jantimon/favicons-webpack-plugin
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, `${dirSrc}img/favicon/favicon.svg`),
            outputPath: '/img/favicon/',
            mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
            devMode: 'light', // optional can be 'webapp' or 'light' - 'light' by default
            cache: true,
            favicons: {
                // See: https://github.com/itgalaxy/favicons#usage
                appName: 'my-app',
                appDescription: 'My awesome App',
                developerName: 'Me',
                developerURL: null, // prevent retrieving from the nearest package.json
                background: '#ddd',
                theme_color: '#333',
                icons: {
                    coast: false,
                    yandex: false
                }
            }
        }),

        // BROWSERSYNC
        new BrowserSyncPlugin({
            notify: true,
            // host: 'localhost',
            host: '0.0.0.0',
            port: 3000,
            // logLevel: 'silent',
            // files: [
            //     // '{lib,templates}/**/*.php', '*.php',
            //     "*.css",
            //     "**/*.php",
            //     "**/*.twig",
            //     // dest + '/**',
            //     "!**/*.map",
            //     "!vendor",
            //     "!node_modules"
            // ],
            files: [
                './*.html',
                // '**/*.css'
            ],
            proxy: "localhost:8080", // The webpack dev server port
            open: false,
            browser: ["google chrome", "firefox"]
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false,
            injectCss: true,
        }
    )

    ], // End plugins

    devServer: {
        host: '0.0.0.0',//your ip address
        port: 8080
    }    

} // End module.exports