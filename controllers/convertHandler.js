function ConvertHandler() {

  this.getNum = function (input) {
    let result = input;
    result = result.split(/(?<=\d)(?=[/a-zA-Z])/);
    if (result.length == 1) {
      result.unshift('1');
    }
    console.log(result);
    // Checking if number contains /
    if (result.length == 3) {
      // console.log("Sliced: " + result[ 1 ].slice(1))
      result[ 1 ] = result[ 0 ] / Number(result[ 1 ].slice(1))
      result.shift();
      // result.unshift(result.pop() / result.pop());
      console.log(result)
    }
    return Number(result[ 0 ]) ? (Number(result[ 0 ])) : (null);
  };

  this.getUnit = function (input) {
    let result = input;
    result = result.split(/(?<=\d)(?=[/a-zA-Z])/);
    if (result.length == 1) {
      result.unshift('1');
    }
    if (result.length == 3) {
      result.shift();
    }
    return result[ 1 ];
  };

  this.getReturnUnit = function (initUnit) {
    initUnit = initUnit.toLowerCase();
    let result;
    switch (initUnit) {
      case 'kg': result = 'lbs'; break;
      case 'lbs': result = 'kg'; break;
      case 'mi': result = 'km'; break;
      case 'km': result = 'mi'; break;
      case 'gal': result = 'L'; break;
      case 'l': result = 'gal'; break;
      default: result = null;
    }
    // console.log(result);

    return result;
  };

  this.spellOutUnit = function (unit) {
    unit = unit.toLowerCase();
    let result;
    switch (unit) {
      case 'kg': result = 'kilograms'; break;
      case 'lbs': result = 'pounds'; break;
      case 'mi': result = 'miles'; break;
      case 'km': result = 'kilometers'; break;
      case 'gal': result = 'gallons'; break;
      case 'l': result = 'liters'; break;
      default: result = null;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };

}

module.exports = ConvertHandler;
