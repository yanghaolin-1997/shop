module.exports={
  configureWebpack:{
    resolve:{
      // extensions:[] 默认配置 .vue .css .js 脚手架已配置
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}