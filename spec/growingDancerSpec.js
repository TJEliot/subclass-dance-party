describe('growingDancer', function() {
  var growingDancer;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new makeGrowingDancer(10, 20, timeBetweenSteps);
    console.log(growingDancer);
    console.log(growingDancer.__proto__['$node'][0]);
  });
  it('should be a subClass of makeDancer', function() {
    expect(growingDancer.__proto__).to.equal('makeDancer');
  });
});