/*
*
*
*       Complete the handler logic below
*       
*       
*/


function ConvertHandler() {
  
  this.getNum = function(input) {
let input1 = input.toLowerCase();
 
 let result;   
 let regex = /[\d+]|[\d+\.\/]|[\d+\/\d+]/g;
 let regex1 = /[\/]/g;
    
 switch(input1) {
    case 'kg' :
    case 'lbs':
    case 'mi':
    case 'km':
    case 'l':
    case 'gal':
    return result = 1              
}
     
  if(regex.test(input1)){
  
    
  let slashCounter = 0;
  // double slash or more, handler 
  if(regex1.test(input1)){
    input.match(regex1).map((x) => {
   
      if(x ==  '/') {
       slashCounter++ 
     };
    
    })
  };
    
let arr = input1.match(regex);
let arrNum = input1.match(regex).join('').split('/');


 if(arr[0] == '/' || arr[arr.length - 1] == '/') {
   result = 'Invalid number'
 } else if(arrNum.length > 1) {
  result = arrNum[0]/arrNum[1] 
 } else {
  result = parseFloat(input1.match(regex).join(''))
 };
    
   if(slashCounter > 1) { 
      
    result = 'Invalid number' 
   } 
    else if(Number(input1.match(regex).join('')) === 0){
    
      result = 'Invalid number'
   };

   
    return result
  }
 };
  
  this.getUnit = function(input) {
    let result;
    let regex = /[a-zA-Z]/g;
    
    if(regex.test(input)) {
      
      let input1 = input.match(regex).join('').toLowerCase();
      
      switch(input1) {
        case 'lbs':
          result = 'lbs'
          break;
        case 'kg':
          result = 'kg'
          break;
        case 'l':
          result = 'l'
          break;
        case 'gal':
          result = 'gal'
          break;
        case 'mi':
          result = 'mi'
          break;
        case 'km':
           result = 'km'
          break;
        default: result = 'Invalid unit'
      } 
    }
    
    return result
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
        case ('lbs'):
          result = 'kg'
          break;
        case 'kg':
          result = 'lbs'
          break;
        case 'l':
          result = 'gal'
          break;
        case 'gal':
          result = 'l'
          break;
        case 'mi':
          result = 'km'
          break;
        case 'km':
          result = 'mi'
          break;
        default: result = null
      } 
    
    return result;
  };

  this.spellOutUnit = function(initUnit) {
 
let result;
  
  switch(initUnit) {
  case 'km':
  result = 'kilometers'
  break;
  case 'mi':
  result = 'miles'
  break;
  case 'gal':
  result = 'gallons'
  break;
  case 'l':
  result = 'litres'
  break;
  case 'lbs':
  result = 'pounds'
  break;
  case 'kg':
  result = 'kilograms'
 }
  return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const l = 3.78541;
    const kg = 0.453592;
    const km = 1.60934;
    const mi = 0.621371;
    const lbs = 2.20462;
    const gal = 0.264172;
    
    let result;
    
  if(initNum === 1 ) {
    switch(initUnit) {
      case 'mi':
         result = km
        break;
      case 'km':
         result = mi
        break;
      case 'l':
         result = gal
        break;
      case 'gal':
         result = l
        break;
      case 'kg':
         result = lbs
        break;
      case 'lbs':
         result = kg
    
    }
   }
  if(initNum > 0 || initNum < 0) {
       switch(initUnit) {
      case 'mi':
         result = parseFloat((initNum * km).toFixed(5))
        break;
      case 'km':
         result = parseFloat((initNum * mi).toFixed(5))
        break;
      case 'l':
         result = parseFloat((initNum * gal).toFixed(5))
        break;
      case 'gal':
         result = parseFloat((initNum * l).toFixed(5))
        break;
      case 'kg':
         result = parseFloat((initNum * lbs).toFixed(5))
        break;
      case 'lbs':
        result = (parseFloat((initNum * kg).toFixed(5)))
    
    }
   }
    return  result 
  };
  
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum +' '+ this.spellOutUnit(initUnit) +' converts to ' + returnNum +' '+ this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
