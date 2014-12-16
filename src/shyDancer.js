

var ShyDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof ShyDancer 
  ? this 
  : Object.create(ShyDancer.prototype);

  Dancer.call(self, top, left, timeBetweenSteps);
  self.$node = $('<img class="shyDancer"></img>');
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  self.$node.css({
    top: top, 
    left: left
  });
  self.$node.on('mouseover', Dancer.prototype.animateRandomLocation.bind(self));
  return self;
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;
ShyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this 
  // new version of step
  Dancer.prototype.step.call(this);

};
ShyDancer.prototype.lineUp = function() {
  var top = $('body').height() - this.$node.width();
  var left = $('body').width() * Math.random();
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};

