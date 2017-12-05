var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, this.top, this.left, this.timeBetweenSteps);
};

makeSlidingDancer.prototype = new makeDancer;

makeSlidingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.css('border', '10px solid #CCFF00');
  for (var i = 0; i < window['dancers'].length; i++) {
    var pos1 = [window['dancers'][i]['top'], window['dancers'][i]['left']]
 //    console.log(pos1);
     for (var j = 0; j < window['dancers'].length; j++) {
    //   var pos2 = window['dancers'][j].getBoundingClientRect();
    //   if (pos2.x > pos1.x) {
    //     console.log('x collision');
    //   }
    }
  }
  var whereTo = Math.floor(Math.random() * 2);
  console.log(whereTo);
  if (whereTo < 1) {
    this.$node.animate({'left': $('body').height() * Math.random()}, 500);
    //console.log(this);
   // debugger;
  } else if (whereTo < 2) {
    this.$node.animate({'top': $('body').width() * Math.random()}, 500);
  } 
};
makeSlidingDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: 1,
    top: 1
  };
  this.$node.css(styleSettings);
};

makeSlidingDancer.prototype.constructor = makeSlidingDancer;