var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps * 10);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {
  console.log(this.$node);
  console.log(this);
  this.setPosition($('body').height() * 0.5, $('body').width() * 0.5);
  this.$node.addClass('stationary');
};

makeDancer.prototype.breakLine = function() {
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
  //this.$node.removeClass('stationary');
  this.step();
};

makeDancer.prototype.constructor = makeDancer;