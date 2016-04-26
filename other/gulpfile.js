var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var Mock = require("mockjs");
var dataPlug = require("gulp-data");
var path=require("path");
var named=require("vinyl-named");
var webpack=require("webpack-stream");

gulp.task('less', function () {
    gulp.src('css/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(csso())
        .pipe(gulp.dest('css/min'))
        .pipe(reload({stream: true}));
});

// gulp.task("react-package-dev",function () {
//     gulp.src("./js/react/react.jsx")
//         .pipe(named())
//         .pipe(webpack({
//             watch:true,
//             module:{
//
//             }
//         }))
// });

var Return = function (data, code, msg) {
    return {
        info: data || null,
        code: code || 200,
        msg: msg || "请求成功"
    }
};

gulp.task('watch', function () {
    // module.exports = {
    //     entry: "./index.js",
    //     output: {
    //         path: path.join(__dirname, "./dist"),
    //         filename: 'app.js'
    //     },
    //     resolve: {
    //         extensions: ["", ".js", ".jsx"]
    //     },
    //     module: {
    //         loaders: [
    //             {test: /\.js|jsx$/, loaders: ["babel"]}
    //         ]
    //     }
    // };
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html',
            middleware: function (req, res, next) {
                var ajaxUrl = /.do$|.no$/;
                if (ajaxUrl.test(req.originalUrl)) {
                    new Promise(function (res) {
                        gulp.src("mock/data.json")
                            .pipe(dataPlug(function (file) {
                                res(JSON.parse(String(file.contents))[req.originalUrl.replace("/", "")]);
                            }));
                    }).then(function (tpl) {
                        var data = Return(Mock.mock(tpl));
                        console.log("RequestMapping:" + req.originalUrl);
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(data));
                    });
                } else {
                    next();
                }
            }
        },
        // startPath:"kuo-zi",
        open: false
    });
    gulp.watch('css/*.less', ['less']).on('change', reload);
    gulp.watch(['index.html', "gulpfile.js",'view/**', 'js/**','mock/**']).on('change', reload);
});
