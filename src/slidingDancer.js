var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeSlidingDancer.prototype = new makeDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css("border", "10px solid #CCFF00");
  var whereTo = Math.random();
  if (whereTo < 0.25) {
    this.$node.animate({'marginLeft': 500}, 500);
  } else if (whereTo < 0.5) {
    this.$node.animate({'marginLeft': 100}, 500);
  } else if (whereTo < 0.75) {
    this.$node.animate({'marginTop': 0}, 500);
  } else {
    this.$node.animate({'marginTop': 100}, 500);
  }
};
makeSlidingDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: 1
  };
  this.$node.css(styleSettings);
};

makeSlidingDancer.prototype.constructor = makeSlidingDancer;