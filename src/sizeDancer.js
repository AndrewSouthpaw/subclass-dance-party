

var SizeDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof SizeDancer 
  ? this 
  : Object.create(SizeDancer.prototype);

  timeBetweenSteps = Math.random() * 100 + 15
  Dancer.call(self, top, left, timeBetweenSteps);
  self.size = 10;
  self._sizeReset = 10;
  return self;
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;
SizeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this 
  // new version of step
  Dancer.prototype.step.call(this);
  this.size = this.newSize();
  this.$node.css({'border-radius': this.size + 'px', 
                 border: this.size + 'px solid red'});
};
SizeDancer.prototype.lineUp = function() {
  var top = $('body').height() * Math.random();
  this.$node.animate({top: top, left: '0px'},
                     {duration: FLOOR_ANIMATION_DURATION});
};

