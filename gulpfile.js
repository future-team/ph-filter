var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var Server = require('karma').Server;
var webpackConfig = require('./webpack/webpack.config');
var exampleConfig = require('./webpack/demo.config');
var WebpackDevServer = require("webpack-dev-server");
var open = require('gulp-open');
var babel = require('gulp-babel');

var config = require('./package.json');
var devPort = '8081';

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  process.exit(1);
};
gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: 'http://127.0.0.1:' + devPort + '/example/index.html'}));
});

gulp.task('demoBuild', function (done) {
    var wbpk = Object.create(exampleConfig);
    wbpk.devtool = 'eval';
    wbpk.entry = [
        'webpack-dev-server/client?http://127.0.0.1:' + devPort,
        'webpack/hot/only-dev-server',
        './example/src/index.js'
    ];
    wbpk.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ];
    wbpk.module.loaders = [
        {
            test: /date-time\.js$/,
            loaders: ['babel']
        },
        {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        },
        {
            test: /\.png$/,
            loader: "url-loader",
            query: {mimetype: "image/png"}
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?name=./iconfont/[name].[ext]'
        }
    ];

    var compiler = webpack(wbpk);

    new WebpackDevServer(compiler, {
        publicPath: '/example/dist/',
        hot: true,
        historyApiFallback: true,
        port: devPort,
        stats: {
            colors: true
        }
    }).listen(devPort, '127.0.0.1', function (err) {
            if (err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://127.0.0.1:" + devPort + "/webpack-dev-server/index.html");
        });
});

gulp.task('webpack', function(done) {
  webpack(webpackConfig).run(function(err, stats) {
    if(err) throw new gutil.PluginError("require-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

gulp.task('exampleWebpack', function (done) {
    webpack(exampleConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("exampleWebpack", err);
        gutil.log("[exampleWebpack]", stats.toString({}));
        done();
    });
});

gulp.task('min-webpack', function(done) {

  var wbpk = Object.create(webpackConfig);
  wbpk.output.filename = config.name+'.min.js';
  wbpk.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ];

  webpack(wbpk).run(function(err, stats) {
    if(err) throw new gutil.PluginError("min-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

gulp.task('babel', function(done){
  return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.*'], ['demo']);
});

gulp.task('default', ['babel','webpack','exampleWebpack']);
gulp.task('test',['karma']);
gulp.task('demo', ['demoBuild','open']);
gulp.task('min',['min-webpack']);