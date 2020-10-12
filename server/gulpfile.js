const { parallel, watch } = require("gulp");
const nodemon = require("gulp-nodemon");
const browsersync = require("browser-sync");

function serve(done) {
  nodemon({
    script: "server.js",
    ext: "js",
    env: { NODE_ENV: "development" },
    done,
  });
}

// BrowserSync
function browserSync() {
  browsersync({
    proxy: "0.0.0.0:8080",
  });
}

// BrowserSync reload
function browserReload() {
  return browsersync.reload;
}

// Watch files
function watchFiles() {
  // Watch javascripts changes
  watch("*.js").on("change", browserReload());
}

exports.serve = serve;
exports.default = parallel(serve, watchFiles, browserSync);
