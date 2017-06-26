/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/bootstrap.css');
  app.import('vendor/bootstrap.css.map', {
    destDir: 'assets'
  });

  // app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/locales/bootstrap-datepicker.de.min.js');

  return app.toTree();
};
