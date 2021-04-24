var Add = require('../add');
var Substract = require('../subtract');

describe('TEST all used Functions', function(){
    it('The add function adds two numbers correctly', function(){
        expect(Add(1,2)).toEqual(3);
    })

    it('The subtract function subtracts two numbers correctly', function(){
        expect(Substract(1,2)).toEqual(3);
    })
})