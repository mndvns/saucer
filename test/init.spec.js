
var exec = require('child_process').exec;

describe('something', function() {
  it('should do some stuff', function(done) {
    exec('bin/saucer init', function(err, stdout) {
      if (err) return done(err);
      console.log(stdout);
      done();
    })
  })
})
