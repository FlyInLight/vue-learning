const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 自定义配置
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js',
        }
    },
    // 关闭语法检查
    lintOnSave: false,
})