require.config({
  shim: {
    'backbone': {
      deps:['underscore','jquery'],
      exports: 'Backbone'
    },
    'jquery':{
      exports: '$'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: '$'
    },
    underscore: {
      exports: '_'
    }

  },
  paths: {
    backbone: "bower_components/backbone/backbone",
    requirejs: "bower_components/requirejs/require",
    jquery: "bower_components/jquery/dist/jquery"
    underscore: "bower_components/underscore/underscore"
    bootstrap: "bower_components/bootstrap/dist/js/bootstrap",
    d3: "bower_components/d3/d3",
    dcjs: "bower_components/dcjs/dc",
    typeahead: "bower_components/typeahead.js/dist/typeahead.bundle"
  },
  packages: [

  ]
});

require(['app'], function (App) {
  App.initialize();
  // body...
})