
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;
var fs = require('fs');

describe('saucer connect', function() {
  it('should display help', function(done) {
    exec('bin/saucer connect --help', function(err, stdout) {
      if (err) return done(err);
      stdout.should.include('-h, --help');
      done();
    })
  })

  it.skip('should connect', function(done) {
    exec('bin/saucer connect', function(err, stdout) {
      if (err) return done(err);
      stdout.should.include('finishing');
      done();
    })
  })
})

