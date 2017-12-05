// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer" "stretchyDancer" "blinkyDancer" "button"></span>');
  this.$dance = $('<span class = "stretchyDancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {
  // var styleSettings = {
  //   top: $('body').height() * 0.5,
  //   left: $('body').width() * 0.5
  // };  
 // this.$node.css(styleSettings);
  this.setPosition($('body').height() * 0.5, $('body').width() * 0.5);
  //$('.dancer').stop();
  this.$node.removeClass('dancer');
};

makeDancer.prototype.breakLine = function() {
  this.$node.addClass('dancer');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};