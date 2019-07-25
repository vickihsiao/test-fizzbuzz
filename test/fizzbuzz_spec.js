var should = chai.should()
describe('Test function FizzBuzz', function () {
  it('should return Fizz when divided by 3', function () {
    let result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('should return Buzz when divided by 5', function () {
    let result = fizzBuzz(25)
    result.should.be.equal('Buzz')
  })
  it('should return FizzBuzz when divided by both 3 and 5', function () {
    let result = fizzBuzz(30)
    result.should.be.equal('FizzBuzz')
  })
  it('should return the original number if neither divided by 3 nor 5', function () {
    let result = fizzBuzz(11)
    result.should.be.equal(11)
  })
})