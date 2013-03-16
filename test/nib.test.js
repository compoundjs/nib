var utils = require('./utils')
  , request = require('supertest')
  , should = require('should')
  , express = require('express');

describe('nib', function() {
  it('should be able to import and use nib mixins', function (done) {
    var app = getApp();
    var compound = app.compound;

    // App settings
    app.set('cssDirectory', '/stylesheets');
    app.use(express.static(app.root + '/public'));

    // Make sure previously precompiled assets are deleted
    var cssDir = app.root + '/public/stylesheets';
    utils.ensureDirClean(cssDir);

    request(app)
      .get('/stylesheets/application.css')
      .end(function (err, res) {
        should.not.exist(err);

        res.headers['content-type'].should.match(/^text\/css/)
        res.text.length.should.equal(791);

        utils.ensureDirClean(cssDir);
        done();
      });

  });
});