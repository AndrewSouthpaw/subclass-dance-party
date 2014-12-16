

var GroupieDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof GroupieDancer 
  ? this 
  : Object.create(GroupieDancer.prototype);

  Dancer.call(self, top, left, timeBetweenSteps);
  self.$node = $('<img class="groupieDancer"></img>');
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  self.$node.css({
    top: top, 
    left: left
  });
  return self;
};

GroupieDancer.prototype = Object.create(Dancer.prototype);
GroupieDancer.prototype.constructor = Dancer;
GroupieDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this 
  // new version of step
  Dancer.prototype.step.call(this);
  this.creep();
};
GroupieDancer.prototype.lineUp = function() {
  var top = $('body').height() - this.$node.width();
  var left = $('body').width() * Math.random();
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};

GroupieDancer.prototype.creep = function() {
  var closestDancer = this.getClosestDancer();
  var d = this.getDirection(closestDancer);

  // Set a random direction if they are in same spot
  console.log(d.ux,d.uy);
  if (isNaN(d.ux) || !isFinite(d.ux)) {
    d.ux = 
      Math.pow(-1,Math.floor(Math.random()*2+1)) * // direction
      Math.floor(Math.random() * 7)                // moving or not
    d.uy = 
      Math.pow(-1,Math.floor(Math.random()*2+1)) * // direction
      Math.floor(Math.random() * 7)                // moving or not
  }

  var vx = DANCER_VX * d.ux;
  var vy = DANCER_VY * d.uy;
  this.$node.css('left', '+='+vx+'px');
  this.$node.css('top', '+='+vy+'px');
};