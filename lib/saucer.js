
/**
 * Module dependencies.
 */

var fs  = require('fs');
var monocle = require('monocle')();
var path = require('path');

// Expose the innards.

exports = module.exports = {};

var conf = exports.config = require('../config');
var paths = exports.paths = require('./paths');
var log = exports.log = require('./log')(conf.log);
var out = exports.out = log.out;
var search = exports.search = log.search;

/**
 * We watch the logfile because `child_process.spawn`
 * does weird things to stdout, and we need absolute
 * consistency.
 *
 * @param {Function} cb our listener callback
 */

exports.watchLog = function(cb) {
  var logfile = path.resolve(process.cwd(), conf.sauce.logfile);
  if (!fs.existsSync(logfile)) {
    out({style: 'white'}, 'notice',
        'No logfile in current directory',
        'Creating one at ' + logfile)
    fs.openSync(logfile, 'w')
  }
  monocle.watchFiles({
    files: [logfile],
    listener: function(stat) {
      fs.readFile(stat.absolutePath, {encoding: 'utf8'}, function(err, data) {
        var lines = data.split('\n');
        var last = lines[lines.length - 2];
        search('status', last);
      });
    },
    complete: function() {
      if (typeof cb === 'function') return cb();
    }
  });
};
