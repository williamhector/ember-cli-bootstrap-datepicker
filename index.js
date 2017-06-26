/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included(app);

    if (typeof FastBoot === 'undefined') {
      app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
      app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css');
    }
  }
};

