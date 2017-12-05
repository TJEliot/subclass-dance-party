var makeColorDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class = "stretchyDancer"></span>');
  makeSlidingDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeColorDancer.prototype = new makeSlidingDancer;

makeColorDancer.prototype.step = function() {
  makeSlidingDancer.prototype.step.call(this);
  var whereTo = Math.random();
};

makeColorDancer.prototype.constructor = makeColorDancer;