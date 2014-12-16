

var GroupieDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof GroupieDancer 
  ? this 
  : Object.create(GroupieDancer.prototype);

  self._imageURL = 'img/groupie.gif';

  ImageDancer.call(self, top, left, timeBetweenSteps);
  self.$node.addClass('groupieDancer');
  return self;
};

GroupieDancer.prototype = Object.create(ImageDancer.prototype);
GroupieDancer.prototype.constructor = GroupieDancer;
GroupieDancer.prototype.step = function() {
  ImageDancer.prototype.step.call(this);
  this.creep();
};
GroupieDancer.prototype.creep = function() {
  var closestDancer = this.getClosestDancer();
  var d = this.getDirection(closestDancer);

  // Set a random direction if they are in same spot, which will be indicated
  // by a result of NaN or Infinity for d.ux
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