// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer" "stretchyDancer"></span>');
  this.$dance = $('<span class = "stretchyDancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.moving = true;
};

makeDancer.prototype.step = function() {
    setTimeout(function() {if (this['moving']){this.step.bind(this)}}, this.timeBetweenSteps);
  
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function () {
  var styleSettings = {
    top: $('body').height() * 0.5,
    left: $('body').width() * 0.5
  };  
//  this['moving'] = false;
  //console.log(this['moving']);
  this.$node.css(styleSettings);
};