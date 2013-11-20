
var conf = require('../saucer.json')
var Log = require('../lib/log')(conf.log)

describe.skip('log', function() {
  it('should print standard messages', function() {
    console.log();
    Log.out('testing', 'that the logger can print').join(' ')
      .should.include('testing that the logger can print');
  })
  it('should print status messages from sauce_connect.log', function() {
    Log.search('status', '2013-11-18 08:44:53,391 - sauce_connect:0 - INFO - Successfully did some stuff').join(' ')
      .should.include('info Successfully did some stuff');
  })
  it('should alert you when a line is abnormal', function() {
    Log.search('status', 'zzzz').join(' ')
      .should.include('error');
  })
})
