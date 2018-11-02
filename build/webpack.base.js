const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
	entry: {
		app: ['./src/app.jsx']
	},
	
	output: {
		filename: '[name].js',
		publicPath: '/',
		path: path.resolve(__dirname, '../assets')
	},
	
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	
	resolve: {
		extensions: ['.js', '.jsx', '.json', 'index.jsx'],
		modules: [
			path.resolve(__dirname, '../node_modules'),
			path.resolve(__dirname, '../src')
		],
		alias: {}
	},
	
	resolveLoader: {
		modules: ['node_modules']
	},
	
	module: {
		rules: [{
			enforce: 'pre', // pre check
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
			include: [path.join(__dirname, '../src')],
			options: {
				// formatter: require('eslint-friendly-formatter'),
				emitWarning: false
			}
		}, {
			test: /\.(eot|woff2?|ttf|svg)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			]
		}]
	},
	
	plugins: [
		new StyleLintPlugin({
			// 正则匹配想要lint监测的文件
			files: ['src/style/*.less', 'src/views/**/*.less']
		})
	]
}
