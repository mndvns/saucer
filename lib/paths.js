
/**
 * Module dependencies.
 */

var path = require('path');
var resolve = path.resolve;
var fs = require('fs');
var exists = fs.existsSync;

// Resolve common file lookup paths

exports.config  = resolve(__dirname, '..', 'saucer.json');
exports.vendor  = resolve(__dirname, '../bin', 'vendor');
exports.zipfile = resolve(exports.vendor, 'Sauce-Connect-latest.zip');
exports.jarfile = resolve(exports.vendor, 'Sauce-Connect.jar');

/**
 * Load a config file
 * @param {Object} config
 */

exports.loadConfig = function(config) {
  config = config || exports.config || './saucer.json';
  return require(resolve(process.cwd(), config));
}
