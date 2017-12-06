var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeBlinkyDancer.prototype = new makeDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css("border", "10px solid #50BFE6");
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: 1,
    top: 1
  };
  this.$node.css(styleSettings);
};

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;