var expect      = require('expect.js')
  , sexpression = require('../')
  , parse       = sexpression.parse
  , stringify   = sexpression.stringify
  , intern      = sexpression.intern
  , fs 		= require('fs');

describe('File Parsing', function() {
  describe('A JSON file to SEXP file', function() {
    it('should save a SEXP file which contains a SEXP string', function() {

	var contents = fs.readFileSync('test/testfile.json','utf-8');
        expect(JSON.parse(contents)).to.be.an('object');

	var sexpString = stringify(JSON.parse(contents));
	fs.writeFile('test/testsexp.sexp',sexpString, function(err){
          if(err){ return console.log(err); }
        });

    });
  });

  describe('A SEXP file back into a JSON file', function(){
     it('should save a JSON file which is the same as the original', function(){

	var contents = fs.readFileSync('test/testsexp.sexp','utf-8');
        var jsonString = parse(contents);
        
        expect(JSON.parse(jsonString)).to.be.an('object');

	fs.writeFile('test/testSEXP2JSON.json',jsonString, function(err){
          if(err){ return console.log(err); }
        });
     });
  });
});
