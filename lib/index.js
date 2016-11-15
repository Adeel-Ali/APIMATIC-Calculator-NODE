/**
  * @module APIMATICCalculatorLib
  *  
  * Simple calculator API hosted on APIMATIC
  */

var configuration = require('./configuration'),
    SimpleCalculatorController = require('./Controllers/SimpleCalculatorController'),
    OperationTypeEnum = require('./Models/OperationTypeEnum');


function initializer () { }

//Main functional components of APIMATICCalculatorLib
initializer.configuration = configuration;
initializer.SimpleCalculatorController = SimpleCalculatorController;

//Main Models of APIMATICCalculatorLib
initializer.OperationTypeEnum = OperationTypeEnum;

module.exports = initializer;