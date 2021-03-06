/*
 * APIMATICCalculatorLib
 *
 * This file was automatically generated by APIMATIC v2.0 on 11/15/2016
 */
var assert = require('chai').assert;
var TestHelper = require('../TestHelper');
var APIHelper = require('../../lib/APIHelper');
var testerlib = require('../../lib');
var testConfiguration = require('../TestBootstrap');

var controller = testerlib.SimpleCalculatorController;
 
var Operation Type = testerlib.Operation Type;


describe('SimpleCalculatorController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Test Case to see if Calculator works
     */ 
    it('should testSummationTest response', function(done) {
        // Parameters for the API call
        var input = [];
        input["operation"] = new OperationTypeEnum(SUM);
        input["x"] = 5;
        input["y"] = 6;

        controller.getCalculate(input, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(11.0, response);
            done();
        });
    });

    /**
     * Test Case to see if Calculator works
     */ 
    it('should testMultiplicationTest response', function(done) {
        // Parameters for the API call
        var input = [];
        input["operation"] = new OperationTypeEnum(MULTIPLY);
        input["x"] = 5;
        input["y"] = 6;

        controller.getCalculate(input, function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
 
            //not an array, do simple check
            assert.equal(30.0, response);
            done();
        });
    });

});
