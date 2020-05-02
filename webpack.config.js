const path= require("path")

module.exports ={
    entry:['./src/index.js'],
    output:{
        path:path.resolve(__dirname,"public"),
        filename:"bundle.js"
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
            }
        },{
            test:/\.s?css$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname,"public"),
        historyApiFallback:true
    },
    
    devtool: "cheap-module-eval-source-map"
   
}