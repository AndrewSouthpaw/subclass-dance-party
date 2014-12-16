

var GrowingDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof GrowingDancer 
  ? this 
  : Object.create(GrowingDancer.prototype);

  SizeDancer.call(self, top, left, timeBetweenSteps);
  this._maxSize = 30;
  return self;
};

GrowingDancer.prototype = Object.create(SizeDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.newSize = function() {
  if (this.size >= this._maxSize) return this._sizeReset;
  return this.size + 1;
};
