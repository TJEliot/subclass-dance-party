var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeGrowingDancer.prototype = new makeDancer;

makeGrowingDancer.prototype.step = function() {
  makeSlidingDancer.prototype.step.call(this);
  this.$node.addClass('stretchyDancer');
};

makeGrowingDancer.prototype.constructor = makeGrowingDancer;