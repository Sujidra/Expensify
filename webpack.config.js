const path= require("path")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

module.exports =(env)=>{
    const isProduction =env ==='production';
    const MiniCssExtract = new MiniCssExtractPlugin({
        filename:'styles.css'});
    return {entry:["babel-polyfill",'./src/index.js'],
    output:{
        path:path.resolve(__dirname,"public","dist"),
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
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
            
                
            
        }]
    },
    plugins:[
        MiniCssExtract
    ],
    devServer: {
        contentBase: path.resolve(__dirname,"public"),
        historyApiFallback:true,
        publicPath:"/dist/"
    },
    
    devtool: isProduction ?"source-map":"inline-source-map"
   
}
}