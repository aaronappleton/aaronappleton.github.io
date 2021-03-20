module.exports = {
    title: 'Aaron Appleton',
    productionTip: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@images': './images',
                '@projects': '../projects'
            }
        }
    }
}
