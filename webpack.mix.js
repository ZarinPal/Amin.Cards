let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.pug('src/pug/*.pug', 'public', {seeds:'src/seeds'})
    .scripts([
        'node_modules/perfect-scrollbar/dist/perfect-scrollbar.js',
        'src/js/card_slider.js',
        'src/js/app.js'
    ], 'public/assets/js/app.js')
    .sass('src/sass/styles.scss', 'public/assets/css')
    .setPublicPath('public/assets')
    .setResourceRoot('../')
    .copyDirectory('src/img', 'public/assets/img')
    .browserSync(({
        proxy: false,
        port:'8000',
        server: {baseDir: './public'} // this is the only difference
    }));

// mix.setPublicPath('dist')
//     .scripts([
//         './node_modules/jquery/dist/jquery.js',
//         './src/js/app.js'
//     ], 'dist/assets/js/app.js')
//     .sass('./src/sass/styles.scss', 'css');
//
// mix.copyDirectory('./src/plugin/', './dist/assets/plugin/')
//     .copyDirectory('./src/img/', './dist/assets/img/');


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });