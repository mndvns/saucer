
/**
 * Module dependencies.
 */

var express = require('express');
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
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(function(req, res, next) {
    res.locals({
      app: pkg.name
    });

    var render = res.render;
    res.render = function(view, locals, cb) {
      if (typeof locals === 'function') {
        cb = locals;
        locals = {};
      }

      if (locals === false) return render.call(res, view, cb);

      render.call(res, view, locals, function(err, body) {
        if (err) return next(err);
        render.call(res, join(__dirname, '../layout'), {
          body: body
        });
      });
    };

    next();
  });

  app.use(app.router);

  app.use(function indexView(req, res, next) {
    res.render(view);
  });

  return app;
};
