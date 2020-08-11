// 实现这个项目的构建任务
const {src, dest, parallel, series, watch} = require("gulp") //npm install --save-dev gulp

const del = require('del')
const browserSync = require('browser-sync')
// const plugins.sass = require('gulp-sass')   
// const plugins.babel = require('gulp-babel')
// const plugins.swig = require('gulp-swig')
// const plugins.imagemin = require('gulp-imagemin')
const loadPlugins = require('gulp-load-plugins')

const plugins = loadPlugins()
const bs = browserSync.create()

const data = {
    menus: [
      {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
      },
      {
        name: 'Features',
        link: 'features.html'
      },
      {
        name: 'About',
        link: 'about.html'
      },
      {
        name: 'Contact',
        link: '#',
        children: [
          {
            name: 'Twitter',
            link: 'https://twitter.com/w_zce'
          },
          {
            name: 'About',
            link: 'https://weibo.com/zceme'
          },
          {
            name: 'divider'
          },
          {
            name: 'About',
            link: 'https://github.com/zce'
          }
        ]
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
}
 
const clean = () => {
    return del(['dist', 'temp'])
}

const style = () => {
    return src('src/assets/styles/*.scss', {base: 'src'})   //打包之前sass路径 //base采用原始目录
        .pipe(plugins.sass({ outputStyle: 'expanded' } ))           //生成main.css文件 //outputStyle: 'expanded'可以把样式后面的“大括号“换行
        .pipe(dest('temp'))     //打包之后图片路径
        .pipe(bs.reload({ stream: true }))
}

const script = () => {
    return src('src/assets/scripts/*.js', {base: 'src'})   //打包之前sass路径 //base采用原始目录
        .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
        .pipe(dest('temp'))     //打包之后图片路径
        .pipe(bs.reload({ stream: true }))
}

const page = () => {
    return src('src/*.html', { base: 'src' })
      .pipe(plugins.swig({ data, defaults: { cache: false }  })) // 防止模板缓存导致页面不能及时更新
      .pipe(dest('temp'))  
      .pipe(bs.reload({ stream: true })) 
  }

const image = () => {
return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const font = () => {
    return src('src/assets/fonts/**', { base: 'src' })
      .pipe(plugins.imagemin())
      .pipe(dest('dist'))
}

const extra = () => {
    return src('public/**', { base: 'public' })
        .pipe(dest('dist'))
}

const serve = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)

  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)

  bs.init({
      notify: false,
      port: 2080,
      // open: false,
      files: 'dist/**',

      server: {
          baseDir: ['temp', 'src', 'public'],
          routes: {
              '/node_modules': 'node_modules'
          }
      }
  })
}

const useref = () => {
  return src('temp/*.html', { base: 'temp'})
    .pipe(plugins.useref({searchPath: ['temp', '.']}))
    // html js css
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })))
    .pipe(dest('dist'))
}

const compile = parallel(style, script, page)

const build = series(
    clean,
    parallel(
      series(compile, useref),
      image,
      font,
      extra
    )
)

const develop = series(compile, serve)

module.exports = {
    clean,
    build,
    develop,
    serve
}

