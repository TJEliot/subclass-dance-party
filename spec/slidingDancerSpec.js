describe('slidingDancer', function() {
  var slidingDancer, clock;
  var timeBetweenSteps = 100;
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new makeSlidingDancer(10, 20, timeBetweenSteps);
  });
 
  it('should have a new class', function() {
    console.log(slidingDancer);
    expect(slidingDancer).to.exist;
  }); 
});