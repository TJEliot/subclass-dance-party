var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeGrowingDancer.prototype = new makeDancer;

makeGrowingDancer.prototype.step = function() {
  this.$node.addClass('stretchyDancer');
  if (!this.$node.hasClass('stationary')) { 
    makeSlidingDancer.prototype.step.call(this);
  }
};

makeGrowingDancer.prototype.lineUp = function () {
  //this.$node.removeClass('stretchyDancer');
  this.setPosition($('body').height() * 0.5, $('body').width() * 0.5);
  this.$node.addClass('stationary');
  
};
