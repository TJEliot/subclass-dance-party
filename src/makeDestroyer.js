var makeDestroyer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="destroyer"></span>');
  this.step();
  this.setPosition(top, left);
};

//makeDestroyer.prototype = new makeDancer;

makeDestroyer.prototype.step = function() {
  this.$node.removeClass('dancer');
  this.$node.css('border', '20px solid red');
  var dancers = window.document.getElementsByClassName('dancer');
  for (var i = 0; i < dancers.length; i++) {
    var whereWidth = Math.floor(parseFloat(dancers[i].style.left.slice(0, -2)));
    var whereHeight = Math.floor(parseFloat(dancers[i].style.top.slice(0, -2)));
    var destroyerHeight = Math.floor(this['top']);
    var destroyerWidth = Math.floor(this['left']);
    if (Math.abs(whereWidth - destroyerWidth) < 175 && Math.abs(whereHeight - destroyerHeight) < 175) {
      var destroyed = dancers[i];
      destroyed.remove();
    }
  }
  this.$node.addClass('dancer');
  makeSlidingDancer.prototype.step.call(this);  
};

makeDestroyer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDestroyer.prototype.lineUp = function () {
  this.setPosition($('body').height() * 0.5, $('body').width() * 0.5);
};

makeDestroyer.prototype.breakLine = function() {
  this.$node.addClass('dancer');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};


makeDestroyer.prototype.constructor = makeDestroyer;