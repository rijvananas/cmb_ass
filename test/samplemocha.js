var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
const{iselementavailable} = require('./Validations.js')
log = console.log


before(() =>{

    log('start')

})
after(() =>{

    log('End')

})

beforeEach(()=>{

    log('Starteach')
})

afterEach(()=>{

    log('endeach')
})

describe('mocha validate',function(){

    let name = 'Rijvan'

    it ('validate through should',function(){

        name.should.equal('Rijvan')
        log(iselementavailable())
        iselementavailable().should.be.true



    })

    it.skip('validate through expert',function(){

        expect(name).to.equal('Rijvan')
        expect(name.length).to.equal(6)
        expect(name).to.have.lengthOf(6)
        expect(iselementavailable()).to.equal(true)

    })

    it ('validate through assert',function(){

        assert.equal(name,'Rijvan')
        assert.equal(iselementavailable(), true)

    })

})
