var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="slidingDancer"></span>')
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
  this.$node.css('border', '10px solid yellow');
};

makeSlidingDancer.prototype = new makeDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var whereTo = Math.random() * 2;
  if (whereTo < 1) {
    this.$node.animate({'left': $('body').height() * Math.random()}, 500);
  } else if (whereTo < 2) {
    this.$node.animate({'top': $('body').width() * Math.random()}, 500);
  } 
};

makeSlidingDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: 1,
    top: 1
  };
  this.$node.removeClass('dancer');
  this.$node.css(styleSettings);
};

makeSlidingDancer.prototype.constructor = makeSlidingDancer;