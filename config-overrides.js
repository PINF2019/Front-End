const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addBabelPlugin
} = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  fixBabelImports('formik-antd', {
    libraryName: 'formik-antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#FFA500', '@secundary-color': '#206489' }
  }),
  addWebpackAlias({
    '@Components': path.resolve(__dirname, 'src/components/'),
    '@Generated': path.resolve(__dirname, 'src/generated/'),
    '@Graphql': path.resolve(__dirname, 'src/graphql/'),
    '@Utils': path.resolve(__dirname, 'src/utils/'),
    '@Routes': path.resolve(__dirname, 'src/routes'),
    '@Views': path.resolve(__dirname, 'src/views'),
    '@Assets': path.resolve(__dirname, 'src/assets/')
  }),
  addBabelPlugin('@babel/plugin-proposal-optional-chaining')
)
