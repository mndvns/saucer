
/**
 * Module dependencies.
 */

var should = require('should');
var exec = require('child_process').exec;

describe('saucer install', function() {
  beforeEach(function(done) {
    exec('rm -rf bin/vendor/bootstrap', function(err, stdout) {
      if (err) return done(err);
      done();
    })
  })

  it('should load default configuration', function(done) {
    exec('bin/saucer install', function(err, stdout) {
      if (err) return done(err);
      stdout.should.include('loading config file');
      done();
    })
  })
})

