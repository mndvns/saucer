
var type = require('../lib/utils').type;

describe('type', function() {
  it('should give actual type back', function() {
    type(function(){}).should.include('function');
    type({}).should.include('object');
    type('string').should.include('string');
    type(/\w+/).should.include('regexp');
    type([]).should.include('array');
  })
})
