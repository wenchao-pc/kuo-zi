 var gulp=require("gulp");
 var Mock=require("mockjs");
 var browserSync=require("browser-sync").create();
 var reload=browserSync.reload;
 var dataPlug = require("gulp-data");
 var marked = require("gulp-marked");

 gulp.task("build",function () {
     gulp.src("readme.md")
         .pipe(marked(
             {
                 renderer: function (text, level) {
                     var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

                     return '<h' + level + '><a name="' +
                         escapedText +
                         '" class="anchor" href="#' +
                         escapedText +
                         '"><span class="header-link"></span></a>' +
                         text + '</h' + level + '>';
                 }
             }
         ))
         .pipe(gulp.dest("./dist"));
 });

 var Return = function (data, code, msg) {
     return {
         info: data || null,
         code: code || 200,
         msg: msg || "请求成功"
     }
 };

gulp.task("sync-init",function () {
    //浏览器自动刷新初始化
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html',
            middleware: function (req, res, next) {
                var ajaxUrl = /.do$|.no$/;
                if (ajaxUrl.test(req.originalUrl)) {
                    new Promise(function (res) {
                        gulp.src("./mock/data.json")
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
        open: true,
        port:3100
    });
});

gulp.task("watch",["build","sync-init"],function () {
    gulp.watch("./mock/**").on("change",reload);
    gulp.watch("./src/**",["build"]).on("change",reload);
});

 gulp.task("hello",function () {
     console.log("hello angular");
 });