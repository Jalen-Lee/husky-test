import WebpackBundleAnalyzer from 'webpack-bundle-analyzer'
const {BundleAnalyzerPlugin} = WebpackBundleAnalyzer

export default {
  npmClient: 'pnpm',
  clickToComponent:{},
  chainWebpack(memo, { env, webpack }) {
    // 添加额外插件
    memo.plugin('bundleAnalyzerPlugin').use(BundleAnalyzerPlugin);
  },
};
