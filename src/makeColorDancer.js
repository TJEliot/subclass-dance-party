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
  if (whereTo < 0.25) {
//    this.$node
//    this.$node.animate({'color': 'green'});
//    this.$node.animate({ 'marginLeft' : 500}, 500);
//    this.$node.animate({height:'100'});
  } else if (whereTo < 0.5) {
//    this.$node.animate({ 'marginLeft' : 100}, 500);
//    this.$node.animate({height:'10'});
  } else if (whereTo < 0.75) {
//    this.$node.animate({ 'marginTop' : 0}, 500);
//    this.$node.animate({width:'100'});
  } else {
//    this.$node.animate({'marginTop' : 100}, 500);
 //   this.$node.animate({width: ''})
  }
};

makeColorDancer.prototype.constructor = makeColorDancer;