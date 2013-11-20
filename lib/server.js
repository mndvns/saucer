
/**
 * Module dependencies.
 */

var express = require('express');
var log = require('./log').out;
var join = require('path').resolve;

module.exports = function(opts) {
  opts = opts || {};
  var cwd = opts.cwd || process.cwd();
  var pkg = opts.pkg || require(join(cwd, 'component.json'));
  var view = opts.view || 'test';

  var app = express();

  app.set('views', cwd + '/test');
  app.set('view engine', 'jade');
  app.use(express.static(cwd));

  app.use(function(req, res, next) {
    res.locals({
      app: pkg.name
    });
    next();
  });

  app.get('/', function(req, res, next) {
    res.render(view, function(err, body) {
      if (err) return next(err);
      res.render(join(__dirname, '../layout'), {
        body: body
      });
    });
  });

  return app;
};
