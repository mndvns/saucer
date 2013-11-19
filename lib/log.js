
/**
 * Module dependencies.
 */

var Lig = require('lig');
var extend = require('xtend');
var type = require('./utils').type

// Expose `Log`.

exports = module.exports = Log;

/**
 * Write standard `console.log` by extending `Lig`.
 *
 * @param {Object} options
 */

function Log(options) {
  this.options = options;
  this.out = new Lig(this.options).bind(this)
  this.search = search.bind(this);
  this.trim = trim.bind(this);
  return this;
}

/**
 * Filter though third-party stdout and applying our own format.
 *
 * @param {String} rule
 * @param {String} msg
 */

function search(rule, msg) {
  var self = this;

  // A regexp to parse line's of our `sauce_connect.log`.
  var exp = /sauce_connect:[0-9]+ - (\w+) - (.*)/.exec(msg);
  if (!exp) return this.out('error'.red, 'no expression');

  var msgRule = exp[1].toLowerCase();
  var msgContent = trim(exp[2]);

  // Apply default styles.
  var opts = extend(this.options, {
    style: this.options.colors[msgRule]
  });

  // Display the message.
  this.out(opts, msgRule, self.trim(msgContent));

  // We return the values for unit tests.
  return [msgRule, self.trim(msgContent)];
}

/**
 * Trim strings if they exceed the width of the terminal.
 *
 * @param {String} text
 */

function trim(text) {
  var ellipsis = text.length > process.stdout.columns ? '...' : '';
  var pad = this.options.width + this.options.padding + ellipsis.length;
  return text.slice(0, process.stdout.columns - pad).trim() + ellipsis;
}
