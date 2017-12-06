var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer" "stretchyDancer" "blinkyDancer" "button"></span>');
//  this.$dance = $('<span class = "stretchyDancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var dancers = window.document.getElementsByClassName('dancer');
  // for (var i = 0; i < dancers.length; i++) {
  //   var checkTop = (dancers[i]['style']['top']);
  //   for (var j = 0; j < dancers.length; j++) {
  //     var nextTop = (dancers[j]['style']['top']);
  //     if (nextTop > checkTop && i !== j) {
  //       this.remove();
  //     }
  //   }    
  // }
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
  this.setPosition($('body').height() * 0.5, $('body').width() * 0.5);
  this.$node.removeClass('dancer');
};

makeDancer.prototype.breakLine = function() {
  this.$node.addClass('dancer');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};