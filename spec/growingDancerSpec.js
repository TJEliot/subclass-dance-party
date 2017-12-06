describe('growingDancer', function() {
  var growingDancer;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new makeGrowingDancer(10, 20, timeBetweenSteps);
    console.log(growingDancer);
    console.log(growingDancer.__proto__['$node'][0]);
  });
  it('should be animated', function() {
    expect(growingDancer.$node.hasClass('stretchyDancer')).to.equal(true);
  });
});