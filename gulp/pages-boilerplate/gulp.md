
###提纲：
    1、gulp
    2、node-sass    处理 scss 文件
    3、gulp-sass    处理 scss 文件
    4、gulp-babel   处理 js 文件
    5、gulp-swig    处理 html 文件
    6、gulp-imagemin    处理 image 文件，处理字体文件
    7、del  删除目录
    8、gulp-load-plugins    批量引入package.json文件中的依赖项工具，有了这个插件您不必在gulfile.js中手动引入每个gulp插件了。
    9、browser-sync     能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面。可以同时在PC、平板、手机等设备下进项调试。
    10、gulp-useref     可以将HTML引用的多个CSS和JS合并起来，减小依赖的文件个数，从而减少浏览器发起的请求次数。注意：它只负责合并，不负责压缩！
    11、gulp-htmlmin gulp-uglify gulp-clean-css     压缩html,js,css文件
    12、gulp-if     压缩文件也需要判断当前环境。
----------------------
###总结：
    1、在不熟悉怎样安装的情况下，查找网上资料，同时分析报错的原因。
----------------------
###内容笔记：

####1、安装gulp

#####安装gulp命令行工具
    npm install --global gulp-cli

#####创建项目目录并进入，如：
    npx mkdirp my-project
    cd my-project

#####在项目目录下创建 package.json 文件
    npm init

#####安装 gulp，作为开发时依赖项
    npm install --save-dev gulp

#####检查 gulp 版本
    gulp --version

    显示： CLI version: 2.3.0
        Local version: 4.0.2

#####创建 gulpfile 文件

#####测试
    gulp
    如需运行多个任务（task），可以执行 gulp <task> <othertask>。



####2、安装node-sass
    采用了淘宝镜像下载
    npm install node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

####3、安装gulp-sass
    npm install gulp-sass --save-dev

    yarn add gulp-sass --dev 

####4、安装gulp-babel
    npm install gulp-babel --save-dev
    npm install @babel/core @babel/preset-env --save-dev

    yarn add gulp-babel --dev   
    yarn add @babel/core @babel/preset-env --dev

    
####5、安装gulp-swig
    npm install gulp-swig --save-dev

    yarn add gulp-swig --dev

####6、安装gulp-imagemin
    npm install --save-dev gulp-imagemin

    yarn add gulp-imagemin --dev

####7、安装del
    npm install --save-dev del

    yarn add del --dev

####8、安装gulp-load-plugins
    npm install --save-dev gulp-load-plugins

    yarn add gulp-load-plugins --dev

####9、安装browser-sync
    npm install --save-dev browser-sync

    yarn add browser-sync --dev  

####10、安装gulp-useref
    npm install --save-dev gulp-useref

    yarn add gulp-useref --dev  

####11、安装gulp-htmlmin gulp-uglify gulp-clean-css
    npm install --save-dev gulp-htmlmin gulp-uglify gulp-clean-css

    yarn add gulp-htmlmin gulp-uglify gulp-clean-css --dev  

####12、安装gulp-if
    npm install --save-dev gulp-if

    yarn add gulp-if --dev  