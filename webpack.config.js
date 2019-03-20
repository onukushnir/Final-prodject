const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports =  (env = {mode: 'development'})  => {
    const isProduction = env.mode === 'production';

    const plugins = [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: !isProduction,
            name: 'combinejs',
            outputPath: 'js/',
            fileName: 'script.js',
            filesToConcat: [
                './src/js/imagesloaded.pkgd.min.js',
                './src/js/isotope.pkgd.min.js',
                './src/js/slick.min.js',
                './src/js/ssm.min.js',
                './src/js/smooth-scroll.min.js',
                './src/js/jquery.fancybox.min.js',
                './src/js/vue.js',
                './src/js/myscript.js'
            ],
            attributes: {
                async: true
            }
        })
    ];

    if(isProduction) {
        plugins.push(
            new OptimizeCssAssetsPlugin({}),
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([{
                    from: '**/*',  ignore: [ '*js', '*scss' ]
                }],
                { context: "src" }
            )
        )

    }





	return {
        mode: env.mode,

        entry: {
            app: ["./src/js/app.js", './src/scss/style.scss']
        },
        output: {
                path: __dirname + "/dist",
                filename: '[name].js',
        },
        module: { 
            rules: [
                {  
                    test: /\.js$/,  
                     exclude: /node_modules/,    
                     use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    use: [ 
                        MiniCssExtractPlugin.loader,  
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: !isProduction,
                                url: false 
                            }
                        }, 
                        'sass-loader'
                    ]
                  }

            ]
        },
        plugins: plugins,
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            compress: true,
            port: 9000
        }
    }
}
