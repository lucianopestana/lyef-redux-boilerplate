import webpack from 'webpack';
import baseConfig from './base';
import Dashboard from 'webpack-dashboard';
import DashboardPlugin from 'webpack-dashboard/plugin';

const dashboard = new Dashboard();

const config = {
    ... baseConfig,

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000/#/',
        ...baseConfig.entry
    ],

    debug: true,
    devtool: '#inline-source-map',

    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(dashboard.setData),
    ],

    devServer: {
        quiet: true,
        hot: true,
        port: '8000',
        inline: true,
        progress: true,
        historyApiFallback: true,
    }
}

export default config;
