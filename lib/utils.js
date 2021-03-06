
/**
 * Clean types.
 *
 * @param {Object} obj
 */

exports.type = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};
