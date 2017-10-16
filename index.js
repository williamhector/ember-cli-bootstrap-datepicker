/* jshint node: true */
'use strict';
var path = require('path');

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/bootstrap-datepicker/bootstrap-datepicker.js');
    app.import('vendor/bootstrap-datepicker/bootstrap-datepicker.css');
  },

  treeForVendor: function(vendorTree) {
     var trees = [];
     var datePickerPath = path.join(path.dirname(require.resolve('bootstrap-datepicker')), '..');

     if (vendorTree) {
       trees.push(vendorTree);
     }

     //need to wrap with check if it's inside fastboot environment
     trees.push(new Funnel(path.join(datePickerPath, 'js'), {
       destDir: 'bootstrap-datepicker',
       files: [ 'bootstrap-datepicker.js' ]
     }));

     trees.push(new Funnel(path.join(datePickerPath, 'css'), {
       destDir: 'bootstrap-datepicker',
       files: [ 'bootstrap-datepicker.css' ]
     }));

     return mergeTrees(trees);
  }
};
