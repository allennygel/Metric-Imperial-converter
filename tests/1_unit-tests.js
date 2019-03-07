/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '3.32425kg';
      assert.equal(convertHandler.getNum(input), 3.32425);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '1/3gal';
      assert.equal(convertHandler.getNum(input), 1/3);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '3.1/3kg'
      assert.equal(convertHandler.getNum(input), 3.1/3);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '3.1//3kg'
      assert.equal(convertHandler.getNum(input), 'Invalid number')
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'kg'
      assert.equal(convertHandler.getNum(input), 1)
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        
      assert.include(input, convertHandler.getUnit(ele), ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      let input = '32oppai';
      assert.notInclude(units, convertHandler.getUnit(input), 'Invalid unit')
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let unit = ['gal','l','mi','km','lbs','kg'];
      let expect = ['gallons', 'litres', 'miles', 'kilometers', 'pounds', 'kilograms'];
      unit.forEach(function(elem, i) {
      assert.equal(convertHandler.spellOutUnit(elem), expect[i])
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [5, 'l'];
      let expected = 1.3209;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [4, 'mi'];
      let expected = 6.4374;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [4, 'km'];
      let expected = 2.4855;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [20, 'lbs'];
      let expected = 9.0718;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [20, 'kg'];
      let expected = 44.0924;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});