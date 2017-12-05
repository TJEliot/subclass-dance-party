var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('blinkyDancer');
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
//  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//  var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

//  return blinkyDancer;
};

makeBlinkyDancer.prototype = new makeDancer;
//makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css("border", "10px solid #50BFE6");
  this.$node.toggle();
};
makeBlinkyDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: .75
  };
  this.$node.css(styleSettings);
};
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;