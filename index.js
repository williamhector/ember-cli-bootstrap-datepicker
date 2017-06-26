/* jshint node: true */
'use strict';
var path = require('path');

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fbTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/bootstrap-datepicker.js');
    app.import('vendor/bootstrap-datepicker.css');
  },

  treeForVendor: function(vendorTree) {
     var trees = [];
     var datePickerPath = path.dirname(require.resolve('bootstrap-datepicker'));

     if (vendorTree) {
       trees.push(vendorTree);
     }

     //need to wrap with check if it's inside fastboot environment
     trees.push(fbTransform(new Funnel(datePickerPath, {
       destDir: 'bootstrap-datepicker',
       include: [new RegExp(/\.js$/)],
       exclude: [
         'moment',
         'moment.min',
         'package',
         'website'
       ].map(function(key) {
         return new RegExp(key + '\.js$');
       })
     })));

     trees.push(new Funnel(datePickerPath, {
       destDir: 'bootstrap-datepicker',
       include: [new RegExp(/\.css$/)]
     }));

     return mergeTrees(trees);
  }
};
